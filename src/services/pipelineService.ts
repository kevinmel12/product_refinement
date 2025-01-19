import { CSSProperties } from 'react';

interface PipelineResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export const simulatePipeline = async (apiKey: string, dateRange: string, onProgress: (progress: number) => void) => {
  try {
    onProgress(10);
    const result = await connectToPipeline(apiKey, dateRange);
    if (!result.success) {
      throw new Error(result.error);
    }
    onProgress(100);
    return result;
  } catch (error) {
    onProgress(0);
    throw error;
  }
};

export const connectToPipeline = async (apiKey: string, dateRange: string): Promise<PipelineResponse> => {
  try {
    const response = await fetch("http://localhost:5000/process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        date_range: dateRange
      })
    });

    if (!response.ok) {
      throw new Error(`Pipeline error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      success: true,
      data: data
    };
  } catch (error) {
    console.error("Pipeline connection error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to connect to pipeline"
    };
  }
};

interface StylesDictionary {
  popupContainer: CSSProperties;
  progressBarContainer: CSSProperties;
  progressBar: CSSProperties;
}

export const styles: StylesDictionary = {
  popupContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    padding: '24px',
    background: '#FFF',
    borderRadius: '6px',
    border: '1px solid #C8D5E1',
    width: '400px',
    opacity: 1,
    transition: 'opacity 100ms ease-out',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
  },

  progressBarContainer: {
    width: '100%',
    height: '8px',
    flexShrink: 0,
    borderRadius: '40px',
    background: '#F1F5F9',
    overflow: 'hidden'
  },

  progressBar: {
    height: '100%',
    borderRadius: '40px',
    background: '#0F172A',
    transition: 'width 100ms ease-out'
  }
};
  