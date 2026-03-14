import React, { useState, useEffect } from "react";
import api from "../../services/api/axios";

export default function PreventiveMeasures() {
    const [activeTab, setActiveTab] = useState("risk");
    const [diseases, setDiseases] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDiseases = async () => {
            try {
                const { data } = await api.get('/patient/diseases');
                setDiseases(data || []);
            } catch (error) {
                console.error("Failed to fetch diseases", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDiseases();
    }, []);

    return (
        <div className="w-full">

                <h1 className="text-xl font-semibold mb-6">
                    Healthcare Wellness Portal
                </h1>

                {loading ? (
                    <div className="p-8 text-center text-gray-500">Loading preventive measures...</div>
                ) : diseases.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">No diseases tracked currently.</div>
                ) : (
                    diseases.map((disease, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow p-6 mb-6"
                        >

                            {/* Disease Header */}
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold">{disease.name}</h2>

                                <span
                                    className={`text-xs px-3 py-1 rounded-full font-semibold ${disease.risk === "HIGH RISK"
                                            ? "bg-red-500 text-white"
                                            : disease.risk === "MEDIUM RISK"
                                                ? "bg-yellow-500 text-white"
                                                : "bg-green-500 text-white"
                                        }`}
                                >
                                    {disease.risk}
                                </span>
                            </div>

                            <p className="text-gray-500 mt-2 text-sm">
                                {disease.description}
                            </p>

                            {/* Tabs */}
                            <div className="flex gap-6 bg-gray-100 rounded-full p-2 mt-6 text-sm">
                                <button
                                    onClick={() => setActiveTab("risk")}
                                    className={`px-4 py-1 rounded-full ${activeTab === "risk" ? "bg-white shadow" : ""
                                        }`}
                                >
                                    Risk Factors
                                </button>

                                <button
                                    onClick={() => setActiveTab("warning")}
                                    className={`px-4 py-1 rounded-full ${activeTab === "warning" ? "bg-white shadow" : ""
                                        }`}
                                >
                                    Warning Signs
                                </button>

                                <button
                                    onClick={() => setActiveTab("prevention")}
                                    className={`px-4 py-1 rounded-full ${activeTab === "prevention" ? "bg-white shadow" : ""
                                        }`}
                                >
                                    Prevention
                                </button>

                                <button
                                    onClick={() => setActiveTab("screening")}
                                    className={`px-4 py-1 rounded-full ${activeTab === "screening" ? "bg-white shadow" : ""
                                        }`}
                                >
                                    Screening
                                </button>
                            </div>

                            {/* Risk Factors */}
                            {activeTab === "risk" && (
                                <div className="mt-6">
                                    <h3 className="font-semibold flex items-center gap-2">
                                        ⚠ Risk Factors
                                    </h3>

                                    <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc ml-6">
                                        {disease.riskFactors?.map((risk, i) => (
                                            <li key={i}>{risk}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Warning Signs */}
                            {activeTab === "warning" && (
                                <div className="mt-6">
                                    <h3 className="font-semibold flex items-center gap-2">
                                        🚨 Warning Signs
                                    </h3>

                                    <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc ml-6">
                                        {disease.warningSigns?.map((sign, i) => (
                                            <li key={i}>{sign}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Prevention */}
                            {activeTab === "prevention" && (
                                <div className="mt-6">
                                    <h3 className="font-semibold flex items-center gap-2">
                                        🛡 Prevention Steps
                                    </h3>

                                    <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc ml-6">
                                        {disease.prevention?.map((step, i) => (
                                            <li key={i}>{step}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Screening */}
                            {activeTab === "screening" && (
                                <div className="mt-6">
                                    <h3 className="font-semibold flex items-center gap-2">
                                        🩺 Screening & Testing
                                    </h3>

                                    <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc ml-6">
                                        {disease.screening?.map((test, i) => (
                                            <li key={i}>{test}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))
                )}
        </div>
    );
}