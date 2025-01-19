import React from "react";

interface LoadingDialogProps {
  status: "loading" | "success" | "error";
  visible: boolean;
}

export function LoadingDialog({ status, visible }: LoadingDialogProps) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition ease-out duration-300">
      <div className="bg-white rounded-lg p-6 shadow-lg w-[400px]">
        <p className="text-center mb-4 text-lg font-medium">
          {status === "loading" && "Data processing in progress..."}
          {status === "success" && "Data processing completed successfully"}
          {status === "error" && "Data processing failed"}
        </p>
        <div className="relative w-full h-2 bg-gray-200 rounded">
          <div
            className={`absolute top-0 left-0 h-2 rounded bg-blue-500 transition-all ${
              status === "loading" ? "w-3/4" : "w-full"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
