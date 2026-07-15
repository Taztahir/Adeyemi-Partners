export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Adeyemi & Partners provided the strategic depth and absolute discretion our board required during a critical transition. Their counsel is peerless.",
    author: "Chief Operating Officer",
    role: "Chief Operating Officer",
    company: "Fortune 500 Financial"
  }
];
