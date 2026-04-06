import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

function PaymentForm() {
  const formSchema = z.object({
    email: z.string().email("please enter the valid email"),
    cardNumber: z
      .string()
      .regex(/^\d{12,19}$/, "Please enter a valid card number"),
    expireDate: z.coerce.date().refine((d) => d > new Date(), {
      message: "please enter the valid date",
    }),
    cvv: z.string().regex(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be at most 20 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const submitHandler = (data) => {
    console.log(data);
  };

  const inputStyle = "outline-none rounded-xl px-2 py-2 border w-fit";
  const errorStyle = "text-red-400";
  const labelStyle = "mx-2";

  return (
    <>
      <div className='h-screen'>
        <h1>Payment Form</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <div>
              <label className={labelStyle} htmlFor='email'>
                Email
              </label>
              <input
                id='email'
                className={inputStyle}
                type='email'
                {...register("email")}
              />
            </div>
            {errors.email && (
              <span className={errorStyle}>{errors.email.message}</span>
            )}
          </div>
          <div>
            <div className='flex flex-col'>
              <div>
                <label className={labelStyle} htmlFor='card'>
                  Card Info
                </label>
              </div>
              <input
                className={inputStyle}
                id='card'
                type='number'
                {...register("cardNumber")}
              />
              {errors.cardNumber && (
                <span className={errorStyle}>{errors.cardNumber.message}</span>
              )}
              <div>
                <input
                  className={inputStyle}
                  type='date'
                  {...register("expireDate")}
                />
                {errors.expireDate && (
                  <span className={errorStyle}>
                    {errors.expireDate.message}
                  </span>
                )}
                <input
                  className={inputStyle}
                  type='number'
                  {...register("cvv")}
                />
                {errors.cvv && (
                  <span className={errorStyle}>{errors.cvv.message}</span>
                )}
              </div>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='name'>Name of Cardholder</label>
              <input
                className={inputStyle}
                id='name'
                type='text'
                {...register("name")}
              />
            </div>
            {errors.name && (
              <span className={errorStyle}>{errors.name.message}</span>
            )}
          </div>
          <button type='submit' className='px-4 py-2 bg-gray-700'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default PaymentForm;
