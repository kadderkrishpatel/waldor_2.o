import Link from "next/link";
import clsx from "clsx";
import { OfferCardProps } from "./OfferCard.types";
import Button from "@/src/components/ui/Button";

export default function OfferCard({
  eyebrow,
  eyebrowhref,
  title,
  description,
  discount,
  discountTitle,
  offerDescription,
  buttonText,
  buttonHref,
  className,
}: OfferCardProps) {
  return (
    <div
      className={clsx(
        `
          w-full
          overflow-hidden
          rounded-[16px]
          border
          border-[#C5A375]/50
          bg-[#252D29]

          sm:rounded-[18px]

          lg:h-[350px]
          lg:rounded-[20px]
        `,
        className,
      )}
    >
      <div
        className="
          grid
          grid-cols-1

          lg:h-full
          lg:grid-cols-[minmax(0,1fr)_35%]
        "
      >
        {/* =========================================
            LEFT CONTENT
        ========================================== */}
        <div
          className="
            flex
            flex-col
            justify-center

            px-6
            py-8

            sm:px-8
            sm:py-10

            md:px-10
            md:py-12

            lg:px-[38px]
            lg:py-[38px]
          "
        >
          {/* Eyebrow */}
          <div data-reveal data-direction="left" className="w-fit">
            <Button variant="gold" size="sm" href={eyebrowhref}>
              <span
                className="
                  font-['Hanken_Grotesk']
                  text-[9px]
                  font-semibold
                  leading-[14px]
                  tracking-wider
                  text-[#1F2422]

                  sm:text-[10px]
                  sm:leading-[16px]

                  lg:text-[11px]
                  lg:leading-[17.6px]
                "
              >
                {eyebrow}
              </span>
            </Button>
          </div>

          {/* Title */}
          <h3
            data-reveal
            data-direction="left"
            className="
              mt-4

              font-['Fraunces']
              font-normal
              leading-[1.15]
              text-[#ECE0D1]

              text-[30px]

              sm:text-[34px]

              md:text-[38px]

              lg:text-[40px]
              lg:leading-[48px]
            "
          >
            {title}
          </h3>

          {/* Description */}
          <p
            data-reveal
            data-direction="left"
            className="
              mt-4
              max-w-[570px]
              whitespace-pre-line

              font-['Hanken_Grotesk']
              font-normal
              text-[#9EA3A1]

              text-[14px]
              leading-[22.4px]

              sm:text-[15px]
              sm:leading-[24px]

              lg:text-base
              lg:leading-[25.6px]
            "
          >
            {description}
          </p>
        </div>

        {/* =========================================
            RIGHT OFFER
        ========================================== */}
        <div
          className="
            flex
            flex-col
            justify-center

            border-t
            border-[#C5A375]/20

            bg-[#34362E]

            px-6
            py-8

            sm:px-8
            sm:py-9

            md:px-10

            lg:border-l
            lg:border-t-0
            lg:px-18
            lg:py-15
          "
        >
          {/* Discount */}
          {discount && (
            <div
              data-reveal
              data-direction="right"
              className="
                font-['Fraunces']
                font-light
                leading-none
                tracking-[-0.03em]
                text-[#C5A375]

                text-[48px]

                sm:text-[54px]

                md:text-[60px]

                lg:text-[64px]
                lg:leading-[70.4px]
              "
            >
              {discount}
            </div>
          )}

          {/* Discount title */}
          {discountTitle && (
            <p
              data-reveal
              data-direction="right"
              className="
                mt-2

                font-['Fraunces']
                font-normal
                italic
                text-[#ECE0D1]

                text-[20px]
                leading-[26px]

                sm:text-[22px]
                sm:leading-[29px]

                lg:mt-3
                lg:text-2xl
                lg:leading-[31.2px]
              "
            >
              {discountTitle}
            </p>
          )}

          {/* Offer description */}
          <p
            data-reveal
            data-direction="right"
            className="
              mt-4

              font-['Fraunces']
              font-normal
              italic
              text-[#ECE0D1]

              text-[18px]
              leading-[24px]

              sm:text-[19px]
              sm:leading-[25px]

              lg:text-xl
              lg:leading-[27px]
            "
          >
            {offerDescription}
          </p>

          {/* CTA */}
          <div data-reveal data-direction="right">
            <Link
              href={buttonHref}
              className="
              mt-6
              inline-flex
              min-h-[48px]
              items-center
              justify-center
              rounded-full
              bg-[#C5A375]
              px-5
              py-3

              font-['Hanken_Grotesk']
              text-[11px]
              font-semibold
              uppercase
              leading-[16px]
              tracking-wider
              text-[#3D4844]

              transition-all
              duration-300

              hover:bg-[#D5B98D]

              sm:px-6
              sm:text-[12px]
              sm:leading-[17px]

              md:px-7
              md:py-3

              lg:text-[13px]
              lg:leading-[17.6px]
            "
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
