// Input for VIN-based endpoints
export type VinInput = {
  vin: string;
};

// Input for Plate Decoder
export type PlateDecoderParams = {
  plate: string;
  state: string;
  country?: string;
};

// Input for Vehicle Image Lookup
export type ImageInput = {
  make: string;
  model: string;
  year?: string;
  trim?: string;
  color?: string;
  transparent?: boolean;
  angle?: 'front' | 'side' | 'back';
  photoType?: 'interior' | 'exterior' | 'engine';
  size?: 'Small' | 'Medium' | 'Large' | 'Wallpaper' | 'All';
  license?: 'Public' | 'Share' | 'ShareCommercially' | 'Modify' | 'ModifyCommercially';
};

// Input for OBD Code Decoder
export type ObdcodesdecoderInput = {
  code: string;
};

// Input for Plate Image Recognition
export type PlateImageRecognitionInput = {
  imageUrl: string;
};

// Input for VIN OCR from Image
export type VinOcrInput = {
  imageUrl: string;
};

// Input for Year/Make/Model Search
export type YearMakeModelInput = {
  year: string;
  make: string;
  model: string;
  trim?: string;
};
