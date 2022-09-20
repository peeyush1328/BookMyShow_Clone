import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const PaymentModal = ({ isopen, setIsopen, price }) => {
  const closeModal = () => {
    setIsopen(false);
  };
  const launchPaymentModal = () => {
    let option = {
      key: "rzp_test_z6dm2URHVoL5up",
      amount: price * 100,
      currency: "INR",
      name: "BookyMyShow Clone",
      image:
        "https://lh3.googleusercontent.com/m0T5pBN2VgwdbWqJCHj75qsgIXIZEf8TPtfSK3el65lxNnoxMJwF9GwEwysG-vq9Fag",
      description: "For movie purchase and rental",
      handler: () => {
        setIsopen(false);
        alert("Paymnet Successfully Done");
      },
      theme: { color: "#c4242d" },
    };
    let razorpay = window.Razorpay(option);
    razorpay.open();
  };
  return (
    <>
      <Transition appear show={isopen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Plaese make a Payment
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Hello please click on the below button to make a payment
                    </p>
                  </div>

                  <div className=" flex gap-2 mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={launchPaymentModal}
                    >
                      Pay ₹{price}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel Payment
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PaymentModal;
