import { useState, useRef } from "react";
import { Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface VoiceRecorderProps {
  onRecordingComplete: (transcript: string) => void;
}

const VoiceRecorder = ({ onRecordingComplete }: VoiceRecorderProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/webm" });
        setIsProcessing(true);

        // Simulate API call - in production, this would call a real STT API
        setTimeout(() => {
          const mockTranscript = "प्रधानमंत्री किसान योजना क्या है?";
          onRecordingComplete(mockTranscript);
          setIsProcessing(false);
          toast.success("आपका सवाल सुन लिया गया है");
        }, 1500);

        // Stop all tracks
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
      toast.info("रिकॉर्डिंग शुरू हो गई है...");
    } catch (error) {
      console.error("Error accessing microphone:", error);
      toast.error("माइक्रोफोन एक्सेस की अनुमति दें");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        size="lg"
        onClick={isRecording ? stopRecording : startRecording}
        disabled={isProcessing}
        className={`h-32 w-32 md:h-40 md:w-40 rounded-full shadow-strong transition-all duration-300 ${
          isRecording
            ? "bg-destructive hover:bg-destructive/90 animate-pulse-soft"
            : "bg-gradient-warm hover:opacity-90"
        }`}
      >
        {isRecording ? (
          <MicOff className="h-16 w-16 md:h-20 md:w-20" />
        ) : (
          <Mic className="h-16 w-16 md:h-20 md:w-20" />
        )}
      </Button>

      <div className="text-center">
        <p className="text-lg md:text-xl font-semibold">
          {isProcessing
            ? "प्रोसेस हो रहा है..."
            : isRecording
            ? "रिकॉर्डिंग चल रही है..."
            : "माइक दबाकर बोलें"}
        </p>
        <p className="text-sm md:text-base text-muted-foreground mt-1">
          {isRecording ? "बोलना बंद करने के लिए फिर से दबाएं" : "अपना सवाल पूछें"}
        </p>
      </div>
    </div>
  );
};

export default VoiceRecorder;
