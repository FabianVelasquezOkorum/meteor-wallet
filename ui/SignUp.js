import React, { useState } from 'react';
import { ErrorAlert } from './components/ErrorAlert';
import { Accounts } from 'meteor/accounts-base';
import { RoutePaths } from './RoutePaths';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const signUp = (e) => {
        e.preventDefault();
        Accounts.createUser({ email, password },
            (err) => {
                if (err) {
                    setError(err);
                    setTimeout(() => {
                        setError('');
                    }, 5000);
                    return;
                }
                navigate(RoutePaths.HOME);
            }
        );
    };

    return (
        <div className="flex flex-col items-center">
            <h3 className="px-3 py-2 text-lg text-base font-medium">
                Sign Up
            </h3>
            {error && < ErrorAlert message={error.reason || 'Unknown error'}/>}
            <form className="mt-6">
                <div className="flex flex-col mb-4 space-y-2">
                    <div className="">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full rounded-md border border-gray-500 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full rounded-md border border-gray-500 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
                <div className="flex justify-between">
                    <button
                        className="inline-flex justify-center text-black rounded-md border border-gray-400 py-2 px-4 text-sm font-medium shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                        onClick={() => navigate(RoutePaths.HOME)}
                    >
                        Back to home
                    </button>
                    <button
                        type="submit"
                        className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                        onClick={signUp}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};
