import React from 'react';
import FormFill from './FormFill';

const FormContainer = () => {
    return (
        <div className="flex items-center py-10 justify-center">
            <div className="w-6xl lg:px-0 px-4">
                <h1 className="text-[48px] font-semibold text-text40">
                    Request a Demo
                </h1>
                <p className="text-[18px] text-text50 lg:w-[50%]">
                    Fill out the form below and our team will get in touch with
                    you shortly to schedule a personalized demo.
                </p>
                <div className="mt-8 flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
                    
                    <div className="w-full lg:w-1/2 text-black">
                        <FormFill />
                    </div>

                    <div className="flex w-full justify-center lg:w-1/2">
                        <img
                            src="./contributer.png"
                            alt="Contributor"
                            className="h-[500px] w-[453px] object-cover rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormContainer;
