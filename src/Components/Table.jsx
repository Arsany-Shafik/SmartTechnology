import { useEffect, useState } from "react";
import axios from "axios";

function Table() {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        axios.get(`https://scopey.onrender.com/api/session/sessions`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                console.log(response.status, response);
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
            <h3 className="text-xl font-bold mb-4">Project Spendings</h3>

            {/* Header Tabs */}
            <div className="hidden md:grid grid-cols-5 gap-4 bg-base-100 rounded-lg p-4 mb-4 text-sm font-medium text-gray-700">
                <div>Code</div>
                <div>Status</div>
                <div>Payment Status</div>
                <div>Service</div>
                <div>Created At</div>
            </div>

            {sessions.length === 0 ? (
                <p className="text-gray-500">Loading or no data available.</p>
            ) : (
                <div className="space-y-4">
                    {sessions.slice(0, 10).map((session, index) => (
                        <div
                            key={index}
                            className="md:grid md:grid-cols-5 flex flex-col gap-2 md:gap-4 p-4 bg-white shadow rounded-lg text-sm"
                        >
                            <div className="break-all">{session.code || 'No info'}</div>
                            <div className="break-all">{session.status || 'No info'}</div>
                            <div className="break-all">{session.paymentStatus || 'No info'}</div>
                            <div className="break-all">{session.service || 'No info'}</div>
                            <div className="break-all">{new Date(session.createdAt).toLocaleDateString() || 'No info'}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Table;
