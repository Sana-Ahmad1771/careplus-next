
const Locationmap = () => {
  return (
    <>
    <section className="px-5 lg:px-32 xl:px-40 pt-10 pb-20 overflow-hidden">
    <div className=" w-full h-[565px] mt-10">
      <iframe
        title="Our Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4087.716261155806!2d73.1145456762782!3d33.62915423995113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb4062e2adc1%3A0x96151197c48f4f32!2sSafeCare%20Training%20%26%20Services!5e1!3m2!1sen!2s!4v1754041945548!5m2!1sen!2s"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </section>
    </>
  );
};

export default Locationmap;
