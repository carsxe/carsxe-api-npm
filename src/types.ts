// Input for VIN-based endpoints
export type VinInput = {
  vin: string;
};

// Input for Market Value endpoint
export type MarketValueInput = {
  vin: string;
  state?: string;
  mileage?: string;
  condition?: 'excellent' | 'clean' | 'average' | 'rough';
};

export type SpecsInput = {
  vin: string;
  deepdata?: string;
  disableIntVINDecoding?: string;
};

// Input for Plate Decoder
export type PlateDecoderParams = {
  plate: string;
  country: string;
  state?: string;
  district?: string;
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

// Input for Recalls by Year/Make/Model
export type RecallsYmmInput = {
  year: string;
  make: string;
  model: string;
};

// Input for Recalls Batch submit
export type RecallsBatchSubmitInput = {
  vins?: string[];
  csv?: string;
  csvUrl?: string;
  webhookUrl?: string;
};

// Input for Recalls Batch status / results / download
export type RecallsBatchIdInput = {
  batchId: string;
};

// Input for Year/Make/Model Options dropdowns
export type YmmOptionsInput = {
  dimension?: 'years' | 'makes' | 'models' | 'trims' | 'variants';
  year?: string;
  make?: string;
  model?: string;
  trim?: string;
};

// Input for Ownership by VIN
export type OwnershipVinInput = {
  vin: string;
  include?: string;
};

// Input for Ownership by person
export type OwnershipPersonInput = {
  first_name: string;
  last_name: string;
  address: string;
  zip: string;
  include?: string;
};

// Input for Ownership by address
export type OwnershipAddressInput = {
  address: string;
  zip: string;
  include?: string;
  variant?: string;
};

// Input for Ownership by ZIP
export type OwnershipZipInput = {
  zip: string;
  gender?: string;
  min_age?: string | number;
  max_age?: string | number;
  income?: string;
  page?: string | number;
  limit?: string | number;
  include?: string;
};
