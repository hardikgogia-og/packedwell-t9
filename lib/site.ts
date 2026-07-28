export const site = {
  name: 'PackedWell',
  tagline: "If It Matters, It's PackedWell",
  location: 'Gurugram, India',
  facility: '40,000 sq. ft.',
  phoneDisplay: '+91 70113 10430',
  phone: '917011310430',
  email: 'hello@packedwell.com',
  whatsapp: 'https://wa.me/917011310430',
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.phone}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/manufacturing', label: 'Manufacturing' },
  { href: '/industries', label: 'Industries' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export type Product = {
  slug: string
  title: string
  description: string
  image: string
  applications: string[]
  features: string[]
}

export const products: Product[] = [
  {
    slug: 'luxury-rigid-boxes',
    title: 'Luxury Rigid Boxes',
    description:
      'Premium rigid packaging solutions for luxury products, jewellery, gifting and premium brands. Engineered for structural integrity and unforgettable unboxing.',
    image: '/images/product-rigid-box.png',
    applications: ['Luxury retail', 'Premium gifting', 'Jewellery', 'Electronics'],
    features: ['Magnetic & lid-base closures', 'Foil stamping & embossing', 'Custom inserts', 'Soft-touch lamination'],
  },
  {
    slug: 'jewellery-boxes',
    title: 'Jewellery Boxes',
    description:
      'Elegant jewellery packaging with premium interiors, custom branding and luxury finishes that protect and elevate every piece.',
    image: '/images/product-jewellery-box.png',
    applications: ['Fine jewellery', 'Bridal collections', 'Watches', 'Accessories'],
    features: ['Velvet & satin interiors', 'Custom foam inserts', 'Gold foil branding', 'Concealed hinges'],
  },
  {
    slug: 'perfume-packaging',
    title: 'Perfume Packaging',
    description:
      'Premium fragrance boxes designed for luxury presentation, combining structural precision with refined tactile finishes.',
    image: '/images/product-perfume.png',
    applications: ['Fragrances', 'Attars', 'Gift sets', 'Testers'],
    features: ['Precision-fit inserts', 'Metallic foiling', 'Spot UV detailing', 'Rigid & folding options'],
  },
  {
    slug: 'cosmetic-packaging',
    title: 'Cosmetic Packaging',
    description:
      'Custom packaging solutions for skincare and beauty brands, balancing shelf appeal with sustainable material choices.',
    image: '/images/product-cosmetic.png',
    applications: ['Skincare', 'Colour cosmetics', 'Haircare', 'Wellness'],
    features: ['Eco-friendly boards', 'Vibrant CMYK + Pantone', 'Window & sleeve options', 'Matte / gloss finishes'],
  },
  {
    slug: 'monocarton-packaging',
    title: 'Monocarton Packaging',
    description:
      'High-quality printed cartons for various industries, produced at scale with consistent print quality and finishing.',
    image: '/images/product-monocarton.png',
    applications: ['FMCG', 'Pharma', 'Food & beverage', 'Retail'],
    features: ['High-speed production', 'Precise die-cutting', 'Aqueous & UV coating', 'Bulk consistency'],
  },
  {
    slug: 'corrugated-packaging',
    title: 'Corrugated Packaging',
    description:
      'Strong protective packaging solutions for shipping and bulk requirements, designed to safeguard products in transit.',
    image: '/images/product-corrugated.png',
    applications: ['E-commerce shipping', 'Bulk transport', 'Fragile goods', 'Export'],
    features: ['Multi-ply strength', 'Custom flute profiles', 'Printed branding', 'Stackable designs'],
  },
]

export const industries = [
  {
    name: 'Jewellery',
    description: 'Refined presentation boxes that protect precious pieces and reinforce brand prestige.',
  },
  {
    name: 'Fashion',
    description: 'Statement packaging and rigid boxes that translate runway identity into retail experience.',
  },
  {
    name: 'Beauty',
    description: 'Shelf-ready structures engineered for standout appeal and repeat purchase.',
  },
  {
    name: 'Cosmetics',
    description: 'Precision cartons and secondary packaging for skincare and colour ranges.',
  },
  {
    name: 'Lifestyle',
    description: 'Versatile packaging for premium lifestyle and home brands.',
  },
  {
    name: 'Corporate Gifting',
    description: 'Bespoke gift sets and rigid boxes that make corporate gestures memorable.',
  },
  {
    name: 'Export Brands',
    description: 'Durable, compliant and beautifully finished packaging built for global shipping.',
  },
]

export const manufacturingSteps = [
  { title: 'Requirement Understanding', description: 'We study your product, brand and objectives to define the right packaging brief.' },
  { title: 'Structural Design', description: 'Our design team engineers structures for protection, aesthetics and manufacturability.' },
  { title: 'Material Selection', description: 'We source premium boards, papers and specialty materials suited to your product.' },
  { title: 'Sampling', description: 'Physical prototypes are produced for approval before mass production begins.' },
  { title: 'Production', description: 'Large-scale manufacturing with tight process controls across every batch.' },
  { title: 'Printing & Finishing', description: 'Offset printing, foiling, embossing, lamination and specialty finishes.' },
  { title: 'Quality Control', description: 'Multi-point inspection ensures every unit meets our premium standards.' },
  { title: 'Final Dispatch', description: 'Careful packing and reliable logistics deliver your order on time.' },
]
