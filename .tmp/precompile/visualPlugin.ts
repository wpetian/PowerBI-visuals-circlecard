import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var circleCardAAE934EF08AE4054906A8479816CCF26: IVisualPlugin = {
    name: 'circleCardAAE934EF08AE4054906A8479816CCF26',
    displayName: 'Circle Card',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["circleCardAAE934EF08AE4054906A8479816CCF26"] = circleCardAAE934EF08AE4054906A8479816CCF26;
}

export default circleCardAAE934EF08AE4054906A8479816CCF26;