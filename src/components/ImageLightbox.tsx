import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ImageLightboxProps {
  images: { src: string; title: string; description: string }[];
  currentIndex: number;
  onClose: () => void;
}

const ImageLightbox = ({ images, currentIndex, onClose }: ImageLightboxProps) => {
  const [index, setIndex] = useState(currentIndex);
  const [zoom, setZoom] = useState(1);

  const goToPrevious = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    setZoom(1);
  };

  const goToNext = () => {
    setIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    setZoom(1);
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 1));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>

      <div className="relative w-full h-full flex items-center justify-center p-8">
        <div className="relative max-w-7xl max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
          <img
            src={images[index].src}
            alt={images[index].title}
            className="max-w-full max-h-[85vh] object-contain transition-transform duration-300"
            style={{ transform: `scale(${zoom})` }}
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              handleZoomOut();
            }}
          >
            <ZoomOut className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={(e) => {
              e.stopPropagation();
              handleZoomIn();
            }}
          >
            <ZoomIn className="h-5 w-5" />
          </Button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 backdrop-blur-sm px-6 py-3 rounded-lg max-w-2xl">
          <h3 className="font-semibold text-lg mb-1">{images[index].title}</h3>
          <p className="text-sm text-white/80">{images[index].description}</p>
          <p className="text-xs text-white/60 mt-2">
            {index + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageLightbox;
