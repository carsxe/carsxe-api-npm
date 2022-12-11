export type PlateDecoderParams = {
  plate: string;
  state: string;
  country?: string;
};

// vin input type
export type VinInput = {
  vin: string;
};

// image input type
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

// obdcodesdecoder input type
export type ObdcodesdecoderInput = {
  code: string;
};
