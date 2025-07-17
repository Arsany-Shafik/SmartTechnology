import { useEffect, useState } from "react";
import axios from "../../node_modules/axios/index";

function Table() {
    const [sessions, setSessions] = useState([]);
    useEffect(() => {
        axios.get(`https://scopey.onrender.com/api/session/sessions`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                console.log(response.status, response.data.sessions);
                setSessions(response.data.sessions);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data.message);
                    alert(error.response.data.message);
                } else if (error.request) {
                    console.log(error.request);
                    console.log('Error: ', error.message);
                } else {
                    console.log('Error: ', error.message);
                }
            });
    }, []); 
    return (
        <div className="p-7 pt-10 bg-base-200">
            <h3 className="text-xl font-bold">Project Spendings</h3>
            <div name="tabs" className="tabs tabs-border flex justify-evenly ">
                <div className="p-3 font-medium">Code</div>
                <div className="p-3 font-medium">Status</div>
                <div className="p-3 font-medium">Payment Status</div>
                <div className="p-3 font-medium">service</div>
                <div className="p-3 font-medium">Created At</div>
            </div>
            {sessions.length === 0 ? (
                <p className="p-7  text-gray-500">Loading or no data available.</p>
            ) : (
                    sessions.slice(0, 10).map((session, index) => (
                        <div key={index} className="flex justify-evenly overflow-x-hidden border-b border-gray-300 p-3 text-sm">
                        <div className="">{session.code || 'Sorry ! *No info in Database*'}</div>
                        <div className="">{session.status || 'Sorry ! *No info in Database*'}</div>
                        <div className="">{session.paymentStatus || 'Sorry ! *No info in Database*'}</div>
                        <div className="">{session.service || 'Sorry ! *No info in Database*'}</div>
                        <div className="">{new Date(session.createdAt).toLocaleDateString() || 'Sorry ! *No info in Database*' }</div>
                    </div>
                ))
            )}
        </div>
  );
}

export default Table;