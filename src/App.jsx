import GradientBlinds from "./background/GradientBlinds.jsx";

export function App() {
    return(
        <div className="fixed inset-0 -z-10">
            <GradientBlinds
                gradientColors={["#d425d1", "#39c182"]}
                angle={0}
                noise={0.3}
                blindCount={12}
                blindMinWidth={50}
                spotlightRadius={0.5}
                spotlightSoftness={1}
                spotlightOpacity={1}
                mouseDampening={0.15}
                distortAmount={0}
                shineDirection="left"
                mixBlendMode="lighten"
            />
        </div>
    )
}
