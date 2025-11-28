export function GalleryModal({ item, close }) {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-100 p-4"
      onClick={close}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-3 right-3 bg-white/60 hover:bg-white text-black px-3 py-1 rounded-full shadow"
        >
          ✕
        </button>

        {/* Content */}
        {item.type === "image" ? (
          <img src={item.url} className="w-full max-h-[80vh] object-contain" />
        ) : (
          <iframe
            src={item.url}
            className="w-full h-[70vh]"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
