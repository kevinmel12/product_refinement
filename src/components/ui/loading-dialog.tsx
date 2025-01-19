import React from "react";

interface LoadingDialogProps {
  message: string;
  isVisible: boolean;
}

export const LoadingDialog: React.FC<LoadingDialogProps> = ({
  message,
  isVisible
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="bg-white border border-[#CBD5E1] rounded-lg p-6 w-[333px]">
        <p className="text-base text-center mb-4">{message}</p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="animate-progress h-2 rounded-full bg-[#0F172A]" 
          />
        </div>
      </div>
    </div>
  );
};