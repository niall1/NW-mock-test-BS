import { PercySnapshotBrowser } from "../interfaces/interfaces";

export const percySnapshot = (browser: PercySnapshotBrowser, name: string) => {
    const isVisual = process.env.IS_VISUAL?.trim()
    if(isVisual === 'true'){
       browser.percySnapshot(name);
    }
}