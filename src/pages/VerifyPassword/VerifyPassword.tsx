import OtpInput from "react-otp-input";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useVerifyPassword from "../../hooks/useVerifyPassword";
import MetaHelmet from "../../components/MetaHelmet/MetaHelmet";

const VerifyPassword = () => {
 const {isLoading,getOtp,otp,setOtp,errorMessage}=useVerifyPassword()
  return (
    <>
      <section className="flex justify-center items-center min-h-screen">
      <MetaHelmet metaTitle={'Password Verification'}/>

        <div className="max-w-md mx-auto text-center border-2 bg-white px-4 sm:px-8 py-10 rounded-xl shadow border-sky-800">
          <header className="mb-8">
            <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
            <p className="text-[15px] text-slate-500">
              Enter the 6-digit verification code that was sent to your email.
            </p>
          </header>
        <>
        <div>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span></span>}
              renderInput={(inputProps) => (
                <input
                  {...inputProps}
                  className="otp-input"
                  onFocus={(e) => {
                    e.target.style.outline = "2px solid #007bff";
                  }}
                  onBlur={(e) => {
                    e.target.style.outline = "none";
                  }}
                />
              )}
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0 0.5rem",
                fontSize: "1.5rem",
                borderRadius: "8px",
                border: "1px solid #bbb",
                textAlign: "center",
              }}
            />
          </div>
          <div className="max-w-[260px] mx-auto mt-4">
            <button
              type="submit"
              onClick={getOtp}
              className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-blue-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 cursor-pointer"
              disabled={otp.length !== 6 || isLoading === "pending"}
              aria-label="Verify button"
            >
              {isLoading == "pending" ? (
                <AiOutlineLoading3Quarters className="animate-spin text-2xl text-white" />
              ) : (
                "Verify Account"
              )}
            </button>
            {errorMessage && (
              <div className="mt-3">
                <span className="font-medium text-red-700">{errorMessage}</span>
              </div>
            )}
          </div>
        </>
        </div>
      </section>
    </>
  );
};

export default VerifyPassword;
