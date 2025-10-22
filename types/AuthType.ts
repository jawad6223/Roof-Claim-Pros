export interface PlacePrediction {
  place_id: string;
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

 // Address Suggestion Props
  export interface AddressSuggestionProps {
    value: string;
    onChange: (value: string) => void;
    onSelect: (prediction: PlacePrediction) => void;
    placeholder?: string;
    label?: string;
    required?: boolean;
    error?: string;
    className?: string;
  }