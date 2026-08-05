export interface OfferCardProps {
  /**
   * Small label displayed above the main title.
   */
  eyebrow: string;
  eyebrowhref: string;

  /**
   * Main heading of the card.
   */
  title: string;

  /**
   * Supporting description for the course.
   */
  description: string;

  /**
   * Discount text, e.g. "10% off".
   */
  discount: string;

  /**
   * Text displayed below the discount.
   * Example: "your 6th session"
   */
  discountTitle: string;

  /**
   * Description explaining the offer.
   */
  offerDescription: string;

  /**
   * CTA button label.
   */
  buttonText: string;

  /**
   * CTA destination.
   */
  buttonHref: string;

  /**
   * Optional additional class names.
   */
  className?: string;
}
