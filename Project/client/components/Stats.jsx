import React from 'react';

function Stats({ data }) {
  return (
    <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
      <div className="sm:flex sm:space-x-4">
        <div className="inline-block align-bottom bg-gray-800 rounded-lg text-white overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
          <div className="bg-gray-800 p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm leading-6 font-medium text-gray-400">Fluid Detection</h3>
                <p className="text-3xl font-bold">{data.length !== 0  ? (data[0] > 300 ? <span>'water/saline'</span> : <span>No Fluid</span>) :'NULL'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-block align-bottom bg-gray-800 rounded-lg text-white overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
          <div className="bg-gray-800 p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
              <h3 className="text-sm leading-6 font-medium text-gray-400">Water Flow Rate</h3>
                <p className="text-3xl font-bold">{data.length !== 0  ? `${data[1]}` : 'NULL'}</p></div>
            </div>
          </div>
        </div>
        <div className="inline-block align-bottom bg-gray-800 rounded-lg text-white overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
          <div className="bg-gray-800 p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
              <h3 className="text-sm leading-6 font-medium text-gray-400">Fluid Temperature</h3>
                <p className="text-3xl font-bold">{data.length !== 0 ?`${data[2]}`: ('NULL')}</p> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
