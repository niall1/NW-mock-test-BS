import { Expect, ExpectElement, Definition, NightwatchBrowser } from "nightwatch";
import { SnapshotOptions } from '@percy/core';
/**
 * Currently Expect does not include section 
 * which is needed for our tests to build POM with sections
 * TODO: To be removed when nightwatch types are updated 
 * https://github.com/nightwatchjs/nightwatch/issues/3615
 * Expect is in expect.d.ts 
 */
export interface CustomExpect extends Expect{
  section: (property: Definition) => ExpectElement;
}
export interface PercySnapshotBrowser extends NightwatchBrowser{
  percySnapshot: (tag: string, options?: SnapshotOptions) => void;
}