import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "../shadcn/carousel";

import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

// ===== TYPES AND INTERFACES =====
type CarouselItem = {
  id: number;
  title: string;
  /** Optional custom content component */
  content?: React.ReactNode;
};

type NavigationDotsProps = {
  /** Show navigation dots below the carousel */
  enabled?: boolean;
  /** Custom class name for dots container */
  className?: string;
  /** Custom class name for individual dots */
  dotClassName?: string;
  /** Custom class name for active dot */
  activeDotClassName?: string;
};

type ReusableCarouselProps = {
  /** Array of carousel items to display */
  items: CarouselItem[];
  /** Additional CSS class names */
  className?: string;
  /** Enable infinite loop */
  loop?: boolean;
  /** Autoplay configuration */
  autoplay?:
    | boolean
    | {
        stopOnInteraction: boolean;
        stopOnMouseEnter: boolean;
        delay: number;
      };
  /** Autoscroll configuration */
  autoscroll?:
    | boolean
    | {
        stopOnInteraction: boolean;
        stopOnMouseEnter: boolean;
        speed: number;
      };
  /** Carousel orientation */
  orientation?: "horizontal" | "vertical";
  /** Additional embla carousel plugins */
  plugins?: any[];
  /** Callback when slide changes */
  onSlideChange?: (index: number) => void;
  /** Navigation dots configuration */
  dots?: NavigationDotsProps;
  /** Hide previous/next buttons */
  hideNavigationButtons?: boolean;
  /** Custom item renderer */
  renderItem?: (item: CarouselItem, index: number) => React.ReactNode;
};

// ===== NAVIGATION DOTS COMPONENT =====
interface CarouselDotsProps {
  items: CarouselItem[];
  api: CarouselApi | null;
  current: number;
  className?: string;
  dotClassName?: string;
  activeDotClassName?: string;
}

/**
 * Navigation dots component for carousel
 * Provides visual indicators and direct navigation to specific slides
 */
const CarouselDots: React.FC<CarouselDotsProps> = React.memo(
  ({
    items,
    api,
    current,
    className = "",
    dotClassName = "",
    activeDotClassName = "",
  }) => {
    if (!api || items.length <= 1) return null;

    const handleDotClick = (index: number) => {
      api?.scrollTo(index);
    };

    return (
      <div className={`mt-4 flex justify-center space-x-2 ${className}`}>
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 focus:outline-none ${
              current === index
                ? `scale-110 bg-primary ${activeDotClassName}`
                : `bg-secondary hover:bg-primary/45 ${dotClassName}`
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index ? "true" : "false"}
          />
        ))}
      </div>
    );
  },
);

CarouselDots.displayName = "CarouselDots";

// ===== MAIN CAROUSEL COMPONENT =====
/**
 *
 *
 * @description A highly customizable carousel component with autoplay, autoscroll, and navigation dots support.
 * Built on top of shadcn/ui Carousel with embla-carousel integration.
 *
 * @version 1.1.0
 * @features Autoplay or Autoscroll, Navigation Dots, Keyboard Navigation, Responsive
 * Advanced carousel component with autoplay, autoscroll, and navigation features
 *
 * @example
 * // Basic usage with autoplay and dots
 * <AutoplayCarousel
 *   items={items}
 *   autoplay={{ delay: 3000 }}
 *   dots={{ enabled: true }}
 * />
 *
 * @example
 * // Autoscroll with custom dots styling
 * <AutoplayCarousel
 *   items={items}
 *   autoscroll={{ speed: 1 }}
 *   dots={{
 *     enabled: true,
 *     className: "mb-4",
 *     activeDotClassName: "bg-red-500"
 *   }}
 * />
 */
export function AutoplayCarousel({
  items,
  className,
  loop = false,
  autoplay = false,
  autoscroll = false,
  orientation = "horizontal",
  plugins = [],
  onSlideChange,
  dots = { enabled: false },
  hideNavigationButtons = false,
  renderItem,
  ...props
}: ReusableCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Handle slide changes
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      setCurrentSlide(newIndex);
      onSlideChange?.(newIndex);
    };

    api.on("select", onSelect);

    // Initialize current slide
    setCurrentSlide(api.selectedScrollSnap());

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSlideChange]);

  // Configure embla plugins
  const emblaPlugins = React.useMemo(() => {
    const result = [...plugins];

    if (autoplay && !autoscroll) {
      const autoplayConfig =
        typeof autoplay === "object"
          ? autoplay
          : { delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false };
      result.push(Autoplay(autoplayConfig));
    }

    if (autoscroll && !autoplay) {
      const autoscrollConfig =
        typeof autoscroll === "object"
          ? autoscroll
          : { speed: 1, stopOnInteraction: false, stopOnMouseEnter: false };
      result.push(AutoScroll(autoscrollConfig));
    }

    return result;
  }, [autoplay, autoscroll, plugins]);

  // Default item renderer
  const defaultRenderItem = (item: CarouselItem, index: number) => (
    <ItemComponent
      title={item.title}
      id={item.id}
      isActive={currentSlide === index}
    />
  );

  const itemRenderer = renderItem || defaultRenderItem;

  return (
    <div className={`relative ${className}`}>
      <Carousel
        opts={{
          loop,
          axis: orientation === "horizontal" ? "x" : "y",
        }}
        plugins={emblaPlugins}
        orientation={orientation}
        setApi={setApi}
        {...props}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={item.id}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              {itemRenderer(item, index)}
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        {!autoscroll && !hideNavigationButtons && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>

      {/* Navigation Dots */}
      {dots?.enabled && (
        <CarouselDots
          items={items}
          api={api}
          current={currentSlide}
          className={dots.className}
          dotClassName={dots.dotClassName}
          activeDotClassName={dots.activeDotClassName}
        />
      )}
    </div>
  );
}

// ===== DEFAULT ITEM COMPONENT =====
interface ItemComponentProps {
  id: number;
  title: string;
  isActive?: boolean;
}

/**
 * Default carousel item component
 * Can be overridden using the renderItem prop
 */
export const ItemComponent = React.memo(
  ({ title, id, isActive = false }: ItemComponentProps) => (
    <div
      className={`flex h-48 items-center justify-center rounded-lg border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-300 ${isActive ? "scale-95 shadow-lg" : "scale-90 shadow-md"} `}
      style={{
        minHeight: "200px",
      }}
    >
      <div className="p-4 text-center">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
        <span className="text-gray-600">Index: {id}</span>
        {isActive && (
          <div className="absolute right-2 top-2 h-3 w-3 animate-pulse rounded-full bg-green-500" />
        )}
      </div>
    </div>
  ),
);

ItemComponent.displayName = "ItemComponent";
