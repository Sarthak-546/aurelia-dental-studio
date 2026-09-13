export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category:
    | "Reception"
    | "Treatment Room"
    | "Waiting Area"
    | "Equipment"
    | "Staff"
    | "Interior";
  width: number;
  height: number;
}
