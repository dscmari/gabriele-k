"use client";
import { submitNewsletterSubscription } from "@/actions/newsletter";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  checkbox: boolean;
};

export default function WebsiteCheckForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      checkbox: false,
      name: "",
      email: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    submitNewsletterSubscription(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-4 lg:mb-0 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 font-semibold lg:mt-4 text-custom-blue">
          <label htmlFor="website" className="dark:text-darkmode-white">
            Name<span>*</span>
          </label>
          <input
            type="text"
            className={`rounded text-custom-black bg-slate-200 p-2 w-full ${errors.email ? "border-2 border-red-500 outline-none" : ""}`}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-sm text-red-500 font-light">
              Bitte einen gültigen Namen angeben.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4 font-semibold text-custom-blue">
          <label htmlFor="email" className="dark:text-darkmode-white">
            Email-Adresse<span>*</span>
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
            className={`rounded text-custom-black bg-slate-200 p-2 w-full ${errors.email ? "border-2 border-red-500 outline-none" : ""}`}
          />
          {errors.email && (
            <span className="text-sm text-red-500 font-light">
              Bitte eine gültige Mailadresse angeben.
            </span>
          )}
        </div>
      </div>
      <label className="cursor-pointer lg:mb-8">
        <div className="flex items-start gap-4 ">
          <input
            type="checkbox"
            className="min-w-6 cursor-pointer"
            {...register("checkbox", { required: true })}
          />
          <p className="text-xs !cursor-pointer">
            Ich stimme zu, dass meine Angaben aus diesem Formular zur
            Beantwortung meiner Anfrage erhoben und verarbeitet werden. Mehr
            Informationen in der Datenschutzerklärung. Die habe ich gelesen und
            akzeptiert.
          </p>
        </div>
        {errors.checkbox && (
          <span className="text-sm text-red-500 font-light mt-4 block">
            Bitte der Datenschutzvereinbarung zustimmen.
          </span>
        )}
      </label>
      <div className="flex flex-col">
        <button
          type="submit"
         className={`mt-4 lg:mt-0 bg-orange-600 px-4 py-2 text-white font-semibold tracking-tight rounded-xl inline-block whitespace-nowrap hover:bg-custom-bronce self-center lg:w-full`}
        >
          Für Newsletter anmelden
        </button>
        <p className="text-xs text-center mt-4">
          Die Anmeldung zum Newsletter ist komplett kostenlos
        </p>
      </div>
    </form>
  );
}
