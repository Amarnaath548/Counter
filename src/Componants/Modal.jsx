const Modal = ({ isOpen, onClose, onYes, onNo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-sm relative 
                   animate-scaleIn"
      >
       
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">
          Are you sure?
        </h2>

        <p className="text-gray-600 mb-6 text-center">
          Do you want to reset the value to 0?
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onYes}
            className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700"
          >
            Yes
          </button>

          <button
            onClick={onNo}
            className="px-4 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
