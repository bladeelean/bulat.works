"use client";

import { useEffect, useRef, useState, type ReactNode, type ReactElement, Children, cloneElement, isValidElement } from "react";

interface MarqueeProps {
	children: ReactNode;
	speed?: number;
	autoFill?: boolean;
	className?: string;
	direction?: "left" | "right";
	pauseOnHover?: boolean;
}

export const Marquee = ({
	children,
	speed = 100,
	autoFill = false,
	className = "",
	direction = "left",
	pauseOnHover = false,
}: MarqueeProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const animationRef = useRef<number | undefined>(undefined);
	const positionRef = useRef(0);
	const lastTimeRef = useRef<number | undefined>(undefined);
	const speedRef = useRef(speed);
	const contentWidthRef = useRef(0);
	const [isPaused, setIsPaused] = useState(false);

	// Обновляем скорость при изменении (без сброса позиции)
	useEffect(() => {
		speedRef.current = speed;
	}, [speed]);

	useEffect(() => {
		const container = containerRef.current;
		const content = contentRef.current;
		if (!container || !content) return;

		// Ждем, пока контент отрендерится
		const updateContentWidth = () => {
			if (content) {
				// Всегда делим на количество копий для правильного зацикливания
				// При autoFill создаем 3 копии, иначе 2
				const copiesCount = autoFill ? 3 : 2;
				contentWidthRef.current = content.scrollWidth / copiesCount;
			}
		};

		// Используем ResizeObserver для отслеживания изменений размера
		const resizeObserver = new ResizeObserver(() => {
			updateContentWidth();
		});

		resizeObserver.observe(content);

		// Первоначальное измерение с небольшой задержкой для рендеринга
		const timeoutId = setTimeout(() => {
			updateContentWidth();
		}, 0);

		const animate = (currentTime: number) => {
			if (!lastTimeRef.current) {
				lastTimeRef.current = currentTime;
			}

			if (!isPaused && contentWidthRef.current > 0) {
				const deltaTime = (currentTime - lastTimeRef.current) / 1000; // в секундах
				const distance = speedRef.current * deltaTime;

				if (direction === "left") {
					positionRef.current -= distance;
					// Зацикливание: когда первый блок ушел за левый край, сбрасываем на 0
					// Второй блок уже виден справа, поэтому переход незаметен
					if (positionRef.current <= -contentWidthRef.current) {
						positionRef.current = 0;
					}
				} else {
					positionRef.current += distance;
					// Зацикливание: когда первый блок ушел за правый край, сбрасываем на 0
					// Второй блок уже виден слева, поэтому переход незаметен
					if (positionRef.current >= contentWidthRef.current) {
						positionRef.current = 0;
					}
				}

				if (content) {
					content.style.transform = `translateX(${positionRef.current}px)`;
				}
			}

			lastTimeRef.current = currentTime;
			animationRef.current = requestAnimationFrame(animate);
		};

		animationRef.current = requestAnimationFrame(animate);

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
			resizeObserver.disconnect();
			clearTimeout(timeoutId);
		};
	}, [direction, isPaused, autoFill]);

	const handleMouseEnter = () => {
		if (pauseOnHover) {
			setIsPaused(true);
		}
	};

	const handleMouseLeave = () => {
		if (pauseOnHover) {
			setIsPaused(false);
		}
	};

	// Дублируем children для бесшовной анимации
	const renderChildren = () => {
		const childrenArray = Children.toArray(children);
		
		// Всегда создаем минимум 2 копии для бесшовного зацикливания
		const copies: React.ReactElement[] = [];
		const copiesCount = autoFill ? 3 : 2; // При autoFill создаем больше копий
		
		for (let i = 0; i < copiesCount; i++) {
			childrenArray.forEach((child, index) => {
				if (isValidElement(child)) {
					copies.push(
						cloneElement(child, { key: `marquee-${i}-${index}` })
					);
				}
			});
		}
		return copies;
	};

	return (
		<div
			ref={containerRef}
			className={`overflow-hidden ${className}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				ref={contentRef}
				className="flex"
				style={{
					willChange: "transform",
				}}
			>
				{renderChildren()}
			</div>
		</div>
	);
};
