    import React from "react";

    const WhatsAppButton = () => {
        const phoneNumber = "+971557150722";
    
      return (
        <div className="fixed bottom-6 right-6 flex flex-col items-center z-50">
          <a
            href={`https://wa.me/${phoneNumber}`} // ✅ Corrected WhatsApp Link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-12 h-12"
            />
          </a>
          <span className="text-white bg-green-600 px-3 py-1 rounded-lg mt-2 shadow-md font-semibold hidden sm:block">
            Chat with us
          </span>
        </div>
      );
    };
    
    export default WhatsAppButton;
    