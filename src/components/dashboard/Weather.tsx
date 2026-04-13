import React, { useState, useEffect } from 'react';

interface SolData {
    AT: { av: number; mn: number; mx: number };
    HWS: { av: number };
    PRE: { av: number };
    Season: string;
}

const Weather: React.FC = () => {
    const [weather, setWeather] = useState<{ sol: string; data: SolData } | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`)
            .then((res) => res.json())
            .then((data) => {
                if (data.sol_keys && data.sol_keys.length > 0) {
                    const latestSol = data.sol_keys[data.sol_keys.length - 1];
                    setWeather({
                        sol: latestSol,
                        data: data[latestSol],
                    });
                }
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="bg-secondary rounded-lg border border-gray-700 shadow-lg p-6 w-[350px] animate-pulse">
                Lade Wetterdaten aus Elysium Planitia...
            </div>
        );
    }

    if (!weather) {
        return (
            <div className="bg-secondary p-6 rounded-lg border border-gray-700 shadow-lg w-[350px]">
                Wetterstation antwortet nicht.
            </div>
        );
    }

    return (
        <div className="bg-secondary p-6 rounded-lg border border-gray-700 shadow-lg w-[350px]">
            <div className="mb-6">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase">
                        Live Sensor
                    </span>
                </div>
                <h2 className="text-xl mt-2 font-medium tracking-tight">
                    Mars Wetter <span className="text-zinc-500 text-sm">Sol {weather.sol}</span>
                </h2>
            </div>

            <div className="flex items-center gap-6 mb-6 pb-6 border-b border-zinc-800">
                <div className="text-6xl font-bold tracking-tighter">
                    {Math.round(weather.data.AT.av)}°
                </div>
                <div className="text-sm space-y-1">
                    <div className="text-red-400 font-medium">
                        <span className="text-zinc-500 mr-1 text-xs uppercase">Max</span>
                        {Math.round(weather.data.AT.mx)}°C
                    </div>
                    <div className="text-blue-400 font-medium">
                        <span className="text-zinc-500 mr-1 text-xs uppercase">Min</span>
                        {Math.round(weather.data.AT.mn)}°C
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Wind</p>
                    <p className="text-sm font-semibold">{weather.data.HWS.av.toFixed(1)} <span className="text-[10px] text-zinc-500">m/s</span></p>
                </div>
                <div className="text-center border-x border-zinc-800 px-2">
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Druck</p>
                    <p className="text-sm font-semibold">{Math.round(weather.data.PRE.av)} <span className="text-[10px] text-zinc-500">Pa</span></p>
                </div>
                <div className="text-center">
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Saison</p>
                    <p className="text-sm font-semibold capitalize">{weather.data.Season}</p>
                </div>
            </div>
        </div>
    );
};

export default Weather; 