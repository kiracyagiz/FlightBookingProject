import React from "react";

const CreateAccount = () => {
  return (
    <div className="mt-8 mb-8">
      <p className="text-gray-600">Create Account </p>
      <p className="text-xs text-gray-400 md:text-sm md:max-w-lg mt-4 mb-4">
        Tripma is free to use as a guest, but if you create an account today,
        you can save and view flights, manage your trips, earn rewards, and
        more.
      </p>
      <div className="flex gap-x-2 mt-4">
        <input type="checkbox" />
        <label className=" text-xs md:text-sm text-gray-400">
          Save card and create account for later
        </label>
      </div>

      <div className="mt-4 ">
        <input
          type="text"
          placeholder="Email"
          className=" outline-none border border-gray-400  md:w-[400px] p-2 rounded-md"
        />
      </div>
      <div className="mt-4 mb-4">
        <input
          type="text"
          placeholder="Password"
          className=" outline-none border border-gray-400  md:w-[400px] p-2 rounded-md"
        />
      </div>
      <div className="flex items-center mt-4">
        <div className="w-[76px] md:w-[176px] h-0.5 bg-gray-200 mr-4"></div>
        <p className="text-center text-gray-400 flex items-center justify-center ">or</p>
        <div className="w-[76px] md:w-[176px] h-0.5 bg-gray-200 ml-4"></div>
      </div>
    </div>
  );
};

export default CreateAccount;
