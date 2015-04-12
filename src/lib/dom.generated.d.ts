
/////////////////////////////
/// IE DOM APIs
/////////////////////////////

interface Algorithm {
    name?: string;
}

interface AriaRequestEventInit extends EventInit {
    attributeName?: string;
    attributeValue?: string;
}

interface ClipboardEventInit extends EventInit {
    data?: string;
    dataType?: string;
}

interface CommandEventInit extends EventInit {
    commandName?: string;
    detail?: string;
}

interface CompositionEventInit extends UIEventInit {
    data?: string;
}

interface ConfirmSiteSpecificExceptionsInformation extends ExceptionInformation {
    arrayOfDomainStrings?: string[];
}

interface CustomEventInit extends EventInit {
    detail?: any;
}

interface DeviceAccelerationDict {
    x?: number;
    y?: number;
    z?: number;
}

interface DeviceRotationRateDict {
    alpha?: number;
    beta?: number;
    gamma?: number;
}

interface EventInit {
    bubbles?: boolean;
    cancelable?: boolean;
}

interface ExceptionInformation {
    domain?: string;
}

interface FocusEventInit extends UIEventInit {
    relatedTarget?: EventTarget;
}

interface HashChangeEventInit extends EventInit {
    newURL?: string;
    oldURL?: string;
}

interface KeyAlgorithm {
    name?: string;
}

interface KeyboardEventInit extends SharedKeyboardAndMouseEventInit {
    key?: string;
    location?: number;
    repeat?: boolean;
}

interface MouseEventInit extends SharedKeyboardAndMouseEventInit {
    screenX?: number;
    screenY?: number;
    clientX?: number;
    clientY?: number;
    button?: number;
    buttons?: number;
    relatedTarget?: EventTarget;
}

interface MsZoomToOptions {
    contentX?: number;
    contentY?: number;
    viewportX?: string;
    viewportY?: string;
    scaleFactor?: number;
    animate?: string;
}

interface MutationObserverInit {
    childList?: boolean;
    attributes?: boolean;
    characterData?: boolean;
    subtree?: boolean;
    attributeOldValue?: boolean;
    characterDataOldValue?: boolean;
    attributeFilter?: string[];
}

interface ObjectURLOptions {
    oneTimeOnly?: boolean;
}

interface PointerEventInit extends MouseEventInit {
    pointerId?: number;
    width?: number;
    height?: number;
    pressure?: number;
    tiltX?: number;
    tiltY?: number;
    pointerType?: string;
    isPrimary?: boolean;
}

interface PositionOptions {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
}

interface SharedKeyboardAndMouseEventInit extends UIEventInit {
    ctrlKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
    metaKey?: boolean;
    keyModifierStateAltGraph?: boolean;
    keyModifierStateCapsLock?: boolean;
    keyModifierStateFn?: boolean;
    keyModifierStateFnLock?: boolean;
    keyModifierStateHyper?: boolean;
    keyModifierStateNumLock?: boolean;
    keyModifierStateOS?: boolean;
    keyModifierStateScrollLock?: boolean;
    keyModifierStateSuper?: boolean;
    keyModifierStateSymbol?: boolean;
    keyModifierStateSymbolLock?: boolean;
}

interface StoreExceptionsInformation extends ExceptionInformation {
    siteName?: string;
    explanationString?: string;
    detailURI?: string;
}

interface StoreSiteSpecificExceptionsInformation extends StoreExceptionsInformation {
    arrayOfDomainStrings?: string[];
}

interface UIEventInit extends EventInit {
    view?: Window;
    detail?: number;
}

interface WebGLContextAttributes {
    alpha?: boolean;
    depth?: boolean;
    stencil?: boolean;
    antialias?: boolean;
    premultipliedAlpha?: boolean;
    preserveDrawingBuffer?: boolean;
}

interface WebGLContextEventInit extends EventInit {
    statusMessage?: string;
}

interface WheelEventInit extends MouseEventInit {
    deltaX?: number;
    deltaY?: number;
    deltaZ?: number;
    deltaMode?: number;
}

interface EventListener {
    (evt: Event): void;
}

interface ANGLE_instanced_arrays {
    drawArraysInstancedANGLE(mode: number, first: number, count: number, primcount: number): void;
    drawElementsInstancedANGLE(mode: number, count: number, type: number, offset: number, primcount: number): void;
    vertexAttribDivisorANGLE(index: number, divisor: number): void;
    VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: number;
}

declare var ANGLE_instanced_arrays: {
    prototype: ANGLE_instanced_arrays;
    new(): ANGLE_instanced_arrays;
    VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: number;
}

interface AnalyserNode extends AudioNode {
    fftSize: number;
    frequencyBinCount: number;
    maxDecibels: number;
    minDecibels: number;
    smoothingTimeConstant: number;
    getByteFrequencyData(array: any): void;
    getByteTimeDomainData(array: any): void;
    getFloatFrequencyData(array: any): void;
    getFloatTimeDomainData(array: any): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var AnalyserNode: {
    prototype: AnalyserNode;
    new(): AnalyserNode;
}

interface AnimationEvent extends Event {
    animationName: string;
    elapsedTime: number;
    initAnimationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, animationNameArg: string, elapsedTimeArg: number): void;
}

declare var AnimationEvent: {
    prototype: AnimationEvent;
    new(): AnimationEvent;
}

interface ApplicationCache extends EventTarget {
    oncached: (ev: Event) => any;
    onchecking: (ev: Event) => any;
    ondownloading: (ev: Event) => any;
    onerror: (ev: Event) => any;
    onnoupdate: (ev: Event) => any;
    onobsolete: (ev: Event) => any;
    onprogress: (ev: ProgressEvent) => any;
    onupdateready: (ev: Event) => any;
    status: number;
    abort(): void;
    swapCache(): void;
    update(): void;
    CHECKING: number;
    DOWNLOADING: number;
    IDLE: number;
    OBSOLETE: number;
    UNCACHED: number;
    UPDATEREADY: number;
    addEventListener(type: "cached", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "checking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "downloading", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "noupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "obsolete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "updateready", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var ApplicationCache: {
    prototype: ApplicationCache;
    new(): ApplicationCache;
    CHECKING: number;
    DOWNLOADING: number;
    IDLE: number;
    OBSOLETE: number;
    UNCACHED: number;
    UPDATEREADY: number;
}

interface AriaRequestEvent extends Event {
    attributeName: string;
    attributeValue: string;
}

declare var AriaRequestEvent: {
    prototype: AriaRequestEvent;
    new(type: string, eventInitDict?: AriaRequestEventInit): AriaRequestEvent;
}

interface Attr extends Node {
    name: string;
    ownerElement: Element;
    specified: boolean;
    value: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var Attr: {
    prototype: Attr;
    new(): Attr;
}

interface AudioBuffer {
    duration: number;
    length: number;
    numberOfChannels: number;
    sampleRate: number;
    getChannelData(channel: number): any;
}

declare var AudioBuffer: {
    prototype: AudioBuffer;
    new(): AudioBuffer;
}

interface AudioBufferSourceNode extends AudioNode {
    buffer: AudioBuffer;
    loop: boolean;
    loopEnd: number;
    loopStart: number;
    onended: (ev: Event) => any;
    playbackRate: AudioParam;
    start(when?: number, offset?: number, duration?: number): void;
    stop(when?: number): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var AudioBufferSourceNode: {
    prototype: AudioBufferSourceNode;
    new(): AudioBufferSourceNode;
}

interface AudioContext extends EventTarget {
    currentTime: number;
    destination: AudioDestinationNode;
    listener: AudioListener;
    sampleRate: number;
    createAnalyser(): AnalyserNode;
    createBiquadFilter(): BiquadFilterNode;
    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    createBufferSource(): AudioBufferSourceNode;
    createChannelMerger(numberOfInputs?: number): ChannelMergerNode;
    createChannelSplitter(numberOfOutputs?: number): ChannelSplitterNode;
    createConvolver(): ConvolverNode;
    createDelay(maxDelayTime?: number): DelayNode;
    createDynamicsCompressor(): DynamicsCompressorNode;
    createGain(): GainNode;
    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode;
    createOscillator(): OscillatorNode;
    createPanner(): PannerNode;
    createPeriodicWave(real: any, imag: any): PeriodicWave;
    createScriptProcessor(bufferSize?: number, numberOfInputChannels?: number, numberOfOutputChannels?: number): ScriptProcessorNode;
    createStereoPanner(): StereoPannerNode;
    createWaveShaper(): WaveShaperNode;
    decodeAudioData(audioData: any, successCallback: DecodeSuccessCallback, errorCallback?: DecodeErrorCallback): void;
}

declare var AudioContext: {
    prototype: AudioContext;
    new(): AudioContext;
}

interface AudioDestinationNode extends AudioNode {
    maxChannelCount: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var AudioDestinationNode: {
    prototype: AudioDestinationNode;
    new(): AudioDestinationNode;
}

interface AudioListener {
    dopplerFactor: number;
    speedOfSound: number;
    setOrientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): void;
    setPosition(x: number, y: number, z: number): void;
    setVelocity(x: number, y: number, z: number): void;
}

declare var AudioListener: {
    prototype: AudioListener;
    new(): AudioListener;
}

interface AudioNode extends EventTarget {
    channelCount: number;
    channelCountMode: string;
    channelInterpretation: string;
    context: AudioContext;
    numberOfInputs: number;
    numberOfOutputs: number;
    connect(destination: AudioNode, output?: number, input?: number): void;
    disconnect(output?: number): void;
}

declare var AudioNode: {
    prototype: AudioNode;
    new(): AudioNode;
}

interface AudioParam {
    defaultValue: number;
    value: number;
    cancelScheduledValues(startTime: number): void;
    exponentialRampToValueAtTime(value: number, endTime: number): void;
    linearRampToValueAtTime(value: number, endTime: number): void;
    setTargetAtTime(target: number, startTime: number, timeConstant: number): void;
    setValueAtTime(value: number, startTime: number): void;
    setValueCurveAtTime(values: any, startTime: number, duration: number): void;
}

declare var AudioParam: {
    prototype: AudioParam;
    new(): AudioParam;
}

interface AudioProcessingEvent extends Event {
    inputBuffer: AudioBuffer;
    outputBuffer: AudioBuffer;
    playbackTime: number;
}

declare var AudioProcessingEvent: {
    prototype: AudioProcessingEvent;
    new(): AudioProcessingEvent;
}

interface AudioTrack {
    enabled: boolean;
    id: string;
    kind: string;
    label: string;
    language: string;
    sourceBuffer: SourceBuffer;
}

declare var AudioTrack: {
    prototype: AudioTrack;
    new(): AudioTrack;
}

interface AudioTrackList extends EventTarget {
    length: number;
    onaddtrack: (ev: TrackEvent) => any;
    onchange: (ev: Event) => any;
    onremovetrack: (ev: TrackEvent) => any;
    getTrackById(id: string): AudioTrack;
    item(index: number): AudioTrack;
    addEventListener(type: "addtrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "removetrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
    [index: number]: AudioTrack;
}

declare var AudioTrackList: {
    prototype: AudioTrackList;
    new(): AudioTrackList;
}

interface BarProp {
    visible: boolean;
}

declare var BarProp: {
    prototype: BarProp;
    new(): BarProp;
}

interface BeforeUnloadEvent extends Event {
    returnValue: any;
}

declare var BeforeUnloadEvent: {
    prototype: BeforeUnloadEvent;
    new(): BeforeUnloadEvent;
}

interface BiquadFilterNode extends AudioNode {
    Q: AudioParam;
    detune: AudioParam;
    frequency: AudioParam;
    gain: AudioParam;
    type: string;
    getFrequencyResponse(frequencyHz: any, magResponse: any, phaseResponse: any): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var BiquadFilterNode: {
    prototype: BiquadFilterNode;
    new(): BiquadFilterNode;
}

interface Blob {
    size: number;
    type: string;
    msClose(): void;
    msDetachStream(): any;
    slice(start?: number, end?: number, contentType?: string): Blob;
}

declare var Blob: {
    prototype: Blob;
    new (blobParts?: any[], options?: BlobPropertyBag): Blob;
}

interface CDATASection extends Text {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var CDATASection: {
    prototype: CDATASection;
    new(): CDATASection;
}

interface CSS {
    supports(property: string, value?: string): boolean;
}
declare var CSS: CSS;

interface CSSConditionRule extends CSSGroupingRule {
    conditionText: string;
}

declare var CSSConditionRule: {
    prototype: CSSConditionRule;
    new(): CSSConditionRule;
}

interface CSSFontFaceRule extends CSSRule {
    style: CSSStyleDeclaration;
}

declare var CSSFontFaceRule: {
    prototype: CSSFontFaceRule;
    new(): CSSFontFaceRule;
}

interface CSSGroupingRule extends CSSRule {
    cssRules: CSSRuleList;
    deleteRule(index?: number): void;
    insertRule(rule: string, index?: number): number;
}

declare var CSSGroupingRule: {
    prototype: CSSGroupingRule;
    new(): CSSGroupingRule;
}

interface CSSImportRule extends CSSRule {
    href: string;
    media: MediaList;
    styleSheet: CSSStyleSheet;
}

declare var CSSImportRule: {
    prototype: CSSImportRule;
    new(): CSSImportRule;
}

interface CSSKeyframeRule extends CSSRule {
    keyText: string;
    style: CSSStyleDeclaration;
}

declare var CSSKeyframeRule: {
    prototype: CSSKeyframeRule;
    new(): CSSKeyframeRule;
}

interface CSSKeyframesRule extends CSSRule {
    cssRules: CSSRuleList;
    name: string;
    appendRule(rule: string): void;
    deleteRule(rule: string): void;
    findRule(rule: string): CSSKeyframeRule;
}

declare var CSSKeyframesRule: {
    prototype: CSSKeyframesRule;
    new(): CSSKeyframesRule;
}

interface CSSMediaRule extends CSSConditionRule {
    media: MediaList;
}

declare var CSSMediaRule: {
    prototype: CSSMediaRule;
    new(): CSSMediaRule;
}

interface CSSNamespaceRule extends CSSRule {
    namespaceURI: string;
    prefix: string;
}

declare var CSSNamespaceRule: {
    prototype: CSSNamespaceRule;
    new(): CSSNamespaceRule;
}

interface CSSPageRule extends CSSRule {
    pseudoClass: string;
    selector: string;
    selectorText: string;
    style: CSSStyleDeclaration;
}

declare var CSSPageRule: {
    prototype: CSSPageRule;
    new(): CSSPageRule;
}

interface CSSRule {
    cssText: string;
    parentRule: CSSRule;
    parentStyleSheet: CSSStyleSheet;
    type: number;
    CHARSET_RULE: number;
    FONT_FACE_RULE: number;
    IMPORT_RULE: number;
    KEYFRAMES_RULE: number;
    KEYFRAME_RULE: number;
    MEDIA_RULE: number;
    NAMESPACE_RULE: number;
    PAGE_RULE: number;
    STYLE_RULE: number;
    SUPPORTS_RULE: number;
    UNKNOWN_RULE: number;
    VIEWPORT_RULE: number;
}

declare var CSSRule: {
    prototype: CSSRule;
    new(): CSSRule;
    CHARSET_RULE: number;
    FONT_FACE_RULE: number;
    IMPORT_RULE: number;
    KEYFRAMES_RULE: number;
    KEYFRAME_RULE: number;
    MEDIA_RULE: number;
    NAMESPACE_RULE: number;
    PAGE_RULE: number;
    STYLE_RULE: number;
    SUPPORTS_RULE: number;
    UNKNOWN_RULE: number;
    VIEWPORT_RULE: number;
}

interface CSSRuleList {
    length: number;
    item(index: number): CSSRule;
    [index: number]: CSSRule;
}

declare var CSSRuleList: {
    prototype: CSSRuleList;
    new(): CSSRuleList;
}

interface CSSStyleDeclaration {
    alignContent: string;
    alignItems: string;
    alignSelf: string;
    alignmentBaseline: string;
    animation: string;
    animationDelay: string;
    animationDirection: string;
    animationDuration: string;
    animationFillMode: string;
    animationIterationCount: string;
    animationName: string;
    animationPlayState: string;
    animationTimingFunction: string;
    backfaceVisibility: string;
    background: string;
    backgroundAttachment: string;
    backgroundClip: string;
    backgroundColor: string;
    backgroundImage: string;
    backgroundOrigin: string;
    backgroundPosition: string;
    backgroundPositionX: string;
    backgroundPositionY: string;
    backgroundRepeat: string;
    backgroundSize: string;
    baselineShift: string;
    border: string;
    borderBottom: string;
    borderBottomColor: string;
    borderBottomLeftRadius: string;
    borderBottomRightRadius: string;
    borderBottomStyle: string;
    borderBottomWidth: string;
    borderCollapse: string;
    borderColor: string;
    borderImage: string;
    borderImageOutset: string;
    borderImageRepeat: string;
    borderImageSlice: string;
    borderImageSource: string;
    borderImageWidth: string;
    borderLeft: string;
    borderLeftColor: string;
    borderLeftStyle: string;
    borderLeftWidth: string;
    borderRadius: string;
    borderRight: string;
    borderRightColor: string;
    borderRightStyle: string;
    borderRightWidth: string;
    borderSpacing: string;
    borderStyle: string;
    borderTop: string;
    borderTopColor: string;
    borderTopLeftRadius: string;
    borderTopRightRadius: string;
    borderTopStyle: string;
    borderTopWidth: string;
    borderWidth: string;
    bottom: string;
    boxShadow: string;
    boxSizing: string;
    breakAfter: string;
    breakBefore: string;
    breakInside: string;
    captionSide: string;
    clear: string;
    clip: string;
    clipPath: string;
    clipRule: string;
    color: string;
    colorInterpolationFilters: string;
    columnCount: any;
    columnFill: string;
    columnGap: any;
    columnRule: string;
    columnRuleColor: any;
    columnRuleStyle: string;
    columnRuleWidth: any;
    columnSpan: string;
    columnWidth: any;
    columns: string;
    content: string;
    counterIncrement: string;
    counterReset: string;
    cssFloat: string;
    cssText: string;
    cursor: string;
    direction: string;
    display: string;
    dominantBaseline: string;
    emptyCells: string;
    enableBackground: string;
    fill: string;
    fillOpacity: string;
    fillRule: string;
    filter: string;
    flex: string;
    flexBasis: string;
    flexDirection: string;
    flexFlow: string;
    flexGrow: string;
    flexShrink: string;
    flexWrap: string;
    floodColor: string;
    floodOpacity: string;
    font: string;
    fontFamily: string;
    fontFeatureSettings: string;
    fontSize: string;
    fontSizeAdjust: string;
    fontStretch: string;
    fontStyle: string;
    fontVariant: string;
    fontWeight: string;
    glyphOrientationHorizontal: string;
    glyphOrientationVertical: string;
    height: string;
    imeMode: string;
    justifyContent: string;
    kerning: string;
    left: string;
    length: number;
    letterSpacing: string;
    lightingColor: string;
    lineHeight: string;
    listStyle: string;
    listStyleImage: string;
    listStylePosition: string;
    listStyleType: string;
    margin: string;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    marker: string;
    markerEnd: string;
    markerMid: string;
    markerStart: string;
    mask: string;
    maxHeight: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    msContentZoomChaining: string;
    msContentZoomLimit: string;
    msContentZoomLimitMax: any;
    msContentZoomLimitMin: any;
    msContentZoomSnap: string;
    msContentZoomSnapPoints: string;
    msContentZoomSnapType: string;
    msContentZooming: string;
    msFlowFrom: string;
    msFlowInto: string;
    msFontFeatureSettings: string;
    msGridColumn: any;
    msGridColumnAlign: string;
    msGridColumnSpan: any;
    msGridColumns: string;
    msGridRow: any;
    msGridRowAlign: string;
    msGridRowSpan: any;
    msGridRows: string;
    msHighContrastAdjust: string;
    msHyphenateLimitChars: string;
    msHyphenateLimitLines: any;
    msHyphenateLimitZone: any;
    msHyphens: string;
    msImeAlign: string;
    msOverflowStyle: string;
    msScrollChaining: string;
    msScrollLimit: string;
    msScrollLimitXMax: any;
    msScrollLimitXMin: any;
    msScrollLimitYMax: any;
    msScrollLimitYMin: any;
    msScrollRails: string;
    msScrollSnapPointsX: string;
    msScrollSnapPointsY: string;
    msScrollSnapType: string;
    msScrollSnapX: string;
    msScrollSnapY: string;
    msScrollTranslation: string;
    msTextCombineHorizontal: string;
    msTextSizeAdjust: any;
    msTouchAction: string;
    msTouchSelect: string;
    msUserSelect: string;
    msWrapFlow: string;
    msWrapMargin: any;
    msWrapThrough: string;
    opacity: string;
    order: string;
    orphans: string;
    outline: string;
    outlineColor: string;
    outlineStyle: string;
    outlineWidth: string;
    overflow: string;
    overflowX: string;
    overflowY: string;
    padding: string;
    paddingBottom: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    pageBreakAfter: string;
    pageBreakBefore: string;
    pageBreakInside: string;
    parentRule: CSSRule;
    perspective: string;
    perspectiveOrigin: string;
    pointerEvents: string;
    position: string;
    quotes: string;
    right: string;
    rubyAlign: string;
    rubyOverhang: string;
    rubyPosition: string;
    stopColor: string;
    stopOpacity: string;
    stroke: string;
    strokeDasharray: string;
    strokeDashoffset: string;
    strokeLinecap: string;
    strokeLinejoin: string;
    strokeMiterlimit: string;
    strokeOpacity: string;
    strokeWidth: string;
    tableLayout: string;
    textAlign: string;
    textAlignLast: string;
    textAnchor: string;
    textDecoration: string;
    textFillColor: string;
    textIndent: string;
    textJustify: string;
    textKashida: string;
    textKashidaSpace: string;
    textOverflow: string;
    textShadow: string;
    textTransform: string;
    textUnderlinePosition: string;
    top: string;
    touchAction: string;
    transform: string;
    transformOrigin: string;
    transformStyle: string;
    transition: string;
    transitionDelay: string;
    transitionDuration: string;
    transitionProperty: string;
    transitionTimingFunction: string;
    unicodeBidi: string;
    verticalAlign: string;
    visibility: string;
    webkitAlignContent: string;
    webkitAlignItems: string;
    webkitAlignSelf: string;
    webkitAnimation: string;
    webkitAnimationDelay: string;
    webkitAnimationDirection: string;
    webkitAnimationDuration: string;
    webkitAnimationFillMode: string;
    webkitAnimationIterationCount: string;
    webkitAnimationName: string;
    webkitAnimationPlayState: string;
    webkitAnimationTimingFunction: string;
    webkitAppearance: string;
    webkitBackfaceVisibility: string;
    webkitBackground: string;
    webkitBackgroundAttachment: string;
    webkitBackgroundClip: string;
    webkitBackgroundColor: string;
    webkitBackgroundImage: string;
    webkitBackgroundOrigin: string;
    webkitBackgroundPosition: string;
    webkitBackgroundPositionX: string;
    webkitBackgroundPositionY: string;
    webkitBackgroundRepeat: string;
    webkitBackgroundSize: string;
    webkitBorderBottomLeftRadius: string;
    webkitBorderBottomRightRadius: string;
    webkitBorderImage: string;
    webkitBorderImageOutset: string;
    webkitBorderImageRepeat: string;
    webkitBorderImageSlice: string;
    webkitBorderImageSource: string;
    webkitBorderImageWidth: string;
    webkitBorderRadius: string;
    webkitBorderTopLeftRadius: string;
    webkitBorderTopRightRadius: string;
    webkitBoxAlign: string;
    webkitBoxDirection: string;
    webkitBoxFlex: string;
    webkitBoxOrdinalGroup: string;
    webkitBoxOrient: string;
    webkitBoxPack: string;
    webkitBoxSizing: string;
    webkitColumnBreakAfter: string;
    webkitColumnBreakBefore: string;
    webkitColumnBreakInside: string;
    webkitColumnCount: any;
    webkitColumnGap: any;
    webkitColumnRule: string;
    webkitColumnRuleColor: any;
    webkitColumnRuleStyle: string;
    webkitColumnRuleWidth: any;
    webkitColumnSpan: string;
    webkitColumnWidth: any;
    webkitColumns: string;
    webkitFilter: string;
    webkitFlex: string;
    webkitFlexBasis: string;
    webkitFlexDirection: string;
    webkitFlexFlow: string;
    webkitFlexGrow: string;
    webkitFlexShrink: string;
    webkitFlexWrap: string;
    webkitJustifyContent: string;
    webkitOrder: string;
    webkitPerspective: string;
    webkitPerspectiveOrigin: string;
    webkitTapHighlightColor: string;
    webkitTextFillColor: string;
    webkitTextSizeAdjust: any;
    webkitTransform: string;
    webkitTransformOrigin: string;
    webkitTransformStyle: string;
    webkitTransition: string;
    webkitTransitionDelay: string;
    webkitTransitionDuration: string;
    webkitTransitionProperty: string;
    webkitTransitionTimingFunction: string;
    webkitUserSelect: string;
    webkitWritingMode: string;
    whiteSpace: string;
    widows: string;
    width: string;
    wordBreak: string;
    wordSpacing: string;
    wordWrap: string;
    writingMode: string;
    zIndex: string;
    zoom: string;
    getPropertyPriority(propertyName: string): string;
    getPropertyValue(propertyName: string): string;
    item(index: number): string;
    removeProperty(propertyName: string): string;
    setProperty(propertyName: string, value: string, priority?: string): void;
    [index: number]: string;
}

declare var CSSStyleDeclaration: {
    prototype: CSSStyleDeclaration;
    new(): CSSStyleDeclaration;
}

interface CSSStyleRule extends CSSRule {
    readOnly: boolean;
    selectorText: string;
    style: CSSStyleDeclaration;
}

declare var CSSStyleRule: {
    prototype: CSSStyleRule;
    new(): CSSStyleRule;
}

interface CSSStyleSheet extends StyleSheet {
    cssRules: CSSRuleList;
    cssText: string;
    href: string;
    id: string;
    imports: StyleSheetList;
    isAlternate: boolean;
    isPrefAlternate: boolean;
    ownerRule: CSSRule;
    owningElement: Element;
    pages: StyleSheetPageList;
    readOnly: boolean;
    rules: CSSRuleList;
    addImport(bstrURL: string, lIndex?: number): number;
    addPageRule(bstrSelector: string, bstrStyle: string, lIndex?: number): number;
    addRule(bstrSelector: string, bstrStyle?: string, lIndex?: number): number;
    deleteRule(index?: number): void;
    insertRule(rule: string, index?: number): number;
    removeImport(lIndex: number): void;
    removeRule(lIndex: number): void;
}

declare var CSSStyleSheet: {
    prototype: CSSStyleSheet;
    new(): CSSStyleSheet;
}

interface CSSSupportsRule extends CSSConditionRule {
}

declare var CSSSupportsRule: {
    prototype: CSSSupportsRule;
    new(): CSSSupportsRule;
}

interface CanvasGradient {
    addColorStop(offset: number, color: string): void;
}

declare var CanvasGradient: {
    prototype: CanvasGradient;
    new(): CanvasGradient;
}

interface CanvasPattern {
}

declare var CanvasPattern: {
    prototype: CanvasPattern;
    new(): CanvasPattern;
}

interface CanvasRenderingContext2D {
    canvas: HTMLCanvasElement;
    fillStyle: any;
    font: string;
    globalAlpha: number;
    globalCompositeOperation: string;
    lineCap: string;
    lineDashOffset: number;
    lineJoin: string;
    lineWidth: number;
    miterLimit: number;
    msFillRule: string;
    msImageSmoothingEnabled: boolean;
    shadowBlur: number;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    strokeStyle: any;
    textAlign: string;
    textBaseline: string;
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    beginPath(): void;
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    clearRect(x: number, y: number, w: number, h: number): void;
    clip(fillRule?: string): void;
    closePath(): void;
    createImageData(imageDataOrSw: number, sh?: number): ImageData;
    createImageData(imageDataOrSw: ImageData, sh?: number): ImageData;
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    createPattern(image: HTMLImageElement, repetition: string): CanvasPattern;
    createPattern(image: HTMLCanvasElement, repetition: string): CanvasPattern;
    createPattern(image: HTMLVideoElement, repetition: string): CanvasPattern;
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    drawImage(image: HTMLImageElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void;
    drawImage(image: HTMLCanvasElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void;
    drawImage(image: HTMLVideoElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void;
    fill(fillRule?: string): void;
    fillRect(x: number, y: number, w: number, h: number): void;
    fillText(text: string, x: number, y: number, maxWidth?: number): void;
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
    getLineDash(): number[];
    isPointInPath(x: number, y: number, fillRule?: string): boolean;
    lineTo(x: number, y: number): void;
    measureText(text: string): TextMetrics;
    moveTo(x: number, y: number): void;
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void;
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    rect(x: number, y: number, w: number, h: number): void;
    restore(): void;
    rotate(angle: number): void;
    save(): void;
    scale(x: number, y: number): void;
    setLineDash(segments: number[]): void;
    setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
    stroke(): void;
    strokeRect(x: number, y: number, w: number, h: number): void;
    strokeText(text: string, x: number, y: number, maxWidth?: number): void;
    transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
    translate(x: number, y: number): void;
}

declare var CanvasRenderingContext2D: {
    prototype: CanvasRenderingContext2D;
    new(): CanvasRenderingContext2D;
}

interface ChannelMergerNode extends AudioNode {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var ChannelMergerNode: {
    prototype: ChannelMergerNode;
    new(): ChannelMergerNode;
}

interface ChannelSplitterNode extends AudioNode {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var ChannelSplitterNode: {
    prototype: ChannelSplitterNode;
    new(): ChannelSplitterNode;
}

interface CharacterData extends Node, ChildNode {
    data: string;
    length: number;
    appendData(arg: string): void;
    deleteData(offset: number, count: number): void;
    insertData(offset: number, arg: string): void;
    replaceData(offset: number, count: number, arg: string): void;
    substringData(offset: number, count: number): string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var CharacterData: {
    prototype: CharacterData;
    new(): CharacterData;
}

interface ClientRect {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
}

declare var ClientRect: {
    prototype: ClientRect;
    new(): ClientRect;
}

interface ClientRectList {
    length: number;
    item(index: number): ClientRect;
    [index: number]: ClientRect;
}

declare var ClientRectList: {
    prototype: ClientRectList;
    new(): ClientRectList;
}

interface ClipboardEvent extends Event {
    clipboardData: DataTransfer;
}

declare var ClipboardEvent: {
    prototype: ClipboardEvent;
    new(type: string, eventInitDict?: ClipboardEventInit): ClipboardEvent;
}

interface CloseEvent extends Event {
    code: number;
    reason: string;
    wasClean: boolean;
    initCloseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, wasCleanArg: boolean, codeArg: number, reasonArg: string): void;
}

declare var CloseEvent: {
    prototype: CloseEvent;
    new(): CloseEvent;
}

interface CommandEvent extends Event {
    commandName: string;
    detail: string;
}

declare var CommandEvent: {
    prototype: CommandEvent;
    new(type: string, eventInitDict?: CommandEventInit): CommandEvent;
}

interface Comment extends CharacterData {
    text: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var Comment: {
    prototype: Comment;
    new(): Comment;
}

interface CompositionEvent extends UIEvent {
    data: string;
    locale: string;
    initCompositionEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, locale: string): void;
}

declare var CompositionEvent: {
    prototype: CompositionEvent;
    new(typeArg: string, eventInitDict?: CompositionEventInit): CompositionEvent;
}

interface Console {
    assert(test?: boolean, message?: any, ...optionalParams: any[]): void;
    clear(): void;
    count(countTitle?: any): void;
    debug(message?: any, ...optionalParams: any[]): void;
    dir(value?: any, ...optionalParams: any[]): void;
    dirxml(value: any): void;
    error(message?: any, ...optionalParams: any[]): void;
    group(groupTitle?: any): void;
    groupCollapsed(groupTitle?: any): void;
    groupEnd(): void;
    info(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
    msIsIndependentlyComposed(element: Element): boolean;
    profile(reportName?: any): void;
    profileEnd(): void;
    select(element: Element): void;
    time(timerName?: any): void;
    timeEnd(timerName?: any): void;
    trace(): void;
    warn(message?: any, ...optionalParams: any[]): void;
}

declare var Console: {
    prototype: Console;
    new(): Console;
}

interface ConvolverNode extends AudioNode {
    buffer: AudioBuffer;
    normalize: boolean;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var ConvolverNode: {
    prototype: ConvolverNode;
    new(): ConvolverNode;
}

interface Coordinates {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
}

declare var Coordinates: {
    prototype: Coordinates;
    new(): Coordinates;
}

interface Crypto extends Object, RandomSource {
    subtle: SubtleCrypto;
}

declare var Crypto: {
    prototype: Crypto;
    new(): Crypto;
}

interface CryptoKey {
    algorithm: KeyAlgorithm;
    extractable: boolean;
    type: string;
    usages: string[];
}

declare var CryptoKey: {
    prototype: CryptoKey;
    new(): CryptoKey;
}

interface CryptoKeyPair {
    privateKey: CryptoKey;
    publicKey: CryptoKey;
}

declare var CryptoKeyPair: {
    prototype: CryptoKeyPair;
    new(): CryptoKeyPair;
}

interface CustomEvent extends Event {
    detail: any;
    initCustomEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: any): void;
}

declare var CustomEvent: {
    prototype: CustomEvent;
    new(typeArg: string, eventInitDict?: CustomEventInit): CustomEvent;
}

interface DOMError {
    name: string;
    toString(): string;
}

declare var DOMError: {
    prototype: DOMError;
    new(): DOMError;
}

interface DOMException {
    code: number;
    message: string;
    name: string;
    toString(): string;
    ABORT_ERR: number;
    DATA_CLONE_ERR: number;
    DOMSTRING_SIZE_ERR: number;
    HIERARCHY_REQUEST_ERR: number;
    INDEX_SIZE_ERR: number;
    INUSE_ATTRIBUTE_ERR: number;
    INVALID_ACCESS_ERR: number;
    INVALID_CHARACTER_ERR: number;
    INVALID_MODIFICATION_ERR: number;
    INVALID_NODE_TYPE_ERR: number;
    INVALID_STATE_ERR: number;
    NAMESPACE_ERR: number;
    NETWORK_ERR: number;
    NOT_FOUND_ERR: number;
    NOT_SUPPORTED_ERR: number;
    NO_DATA_ALLOWED_ERR: number;
    NO_MODIFICATION_ALLOWED_ERR: number;
    PARSE_ERR: number;
    QUOTA_EXCEEDED_ERR: number;
    SECURITY_ERR: number;
    SERIALIZE_ERR: number;
    SYNTAX_ERR: number;
    TIMEOUT_ERR: number;
    TYPE_MISMATCH_ERR: number;
    URL_MISMATCH_ERR: number;
    VALIDATION_ERR: number;
    WRONG_DOCUMENT_ERR: number;
}

declare var DOMException: {
    prototype: DOMException;
    new(): DOMException;
    ABORT_ERR: number;
    DATA_CLONE_ERR: number;
    DOMSTRING_SIZE_ERR: number;
    HIERARCHY_REQUEST_ERR: number;
    INDEX_SIZE_ERR: number;
    INUSE_ATTRIBUTE_ERR: number;
    INVALID_ACCESS_ERR: number;
    INVALID_CHARACTER_ERR: number;
    INVALID_MODIFICATION_ERR: number;
    INVALID_NODE_TYPE_ERR: number;
    INVALID_STATE_ERR: number;
    NAMESPACE_ERR: number;
    NETWORK_ERR: number;
    NOT_FOUND_ERR: number;
    NOT_SUPPORTED_ERR: number;
    NO_DATA_ALLOWED_ERR: number;
    NO_MODIFICATION_ALLOWED_ERR: number;
    PARSE_ERR: number;
    QUOTA_EXCEEDED_ERR: number;
    SECURITY_ERR: number;
    SERIALIZE_ERR: number;
    SYNTAX_ERR: number;
    TIMEOUT_ERR: number;
    TYPE_MISMATCH_ERR: number;
    URL_MISMATCH_ERR: number;
    VALIDATION_ERR: number;
    WRONG_DOCUMENT_ERR: number;
}

interface DOMImplementation {
    createDocument(namespaceURI: string, qualifiedName: string, doctype: DocumentType): Document;
    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DocumentType;
    createHTMLDocument(title: string): Document;
    hasFeature(feature: string, version: string): boolean;
}

declare var DOMImplementation: {
    prototype: DOMImplementation;
    new(): DOMImplementation;
}

interface DOMParser {
    parseFromString(source: string, mimeType: string): Document;
}

declare var DOMParser: {
    prototype: DOMParser;
    new(): DOMParser;
}

interface DOMSettableTokenList extends DOMTokenList {
    value: string;
}

declare var DOMSettableTokenList: {
    prototype: DOMSettableTokenList;
    new(): DOMSettableTokenList;
}

interface DOMStringList {
    length: number;
    contains(str: string): boolean;
    item(index: number): string;
    [index: number]: string;
}

declare var DOMStringList: {
    prototype: DOMStringList;
    new(): DOMStringList;
}

interface DOMStringMap {
}

declare var DOMStringMap: {
    prototype: DOMStringMap;
    new(): DOMStringMap;
}

interface DOMTokenList {
    length: number;
    add(...token: string[]): void;
    contains(token: string): boolean;
    item(index: number): string;
    remove(...token: string[]): void;
    toString(): string;
    toggle(token: string, force?: boolean): boolean;
    [index: number]: string;
}

declare var DOMTokenList: {
    prototype: DOMTokenList;
    new(): DOMTokenList;
}

interface DataCue extends TextTrackCue {
    data: any;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var DataCue: {
    prototype: DataCue;
    new(): DataCue;
}

interface DataTransfer {
    dropEffect: string;
    effectAllowed: string;
    files: FileList;
    items: DataTransferItemList;
    types: DOMStringList;
    clearData(format?: string): boolean;
    getData(format: string): string;
    setData(format: string, data: string): boolean;
}

declare var DataTransfer: {
    prototype: DataTransfer;
    new(): DataTransfer;
}

interface DataTransferItem {
    kind: string;
    type: string;
    getAsFile(): File;
    getAsString(_callback: FunctionStringCallback): void;
}

declare var DataTransferItem: {
    prototype: DataTransferItem;
    new(): DataTransferItem;
}

interface DataTransferItemList {
    length: number;
    add(data: File): DataTransferItem;
    clear(): void;
    item(index: number): File;
    remove(index: number): void;
    [index: number]: File;
}

declare var DataTransferItemList: {
    prototype: DataTransferItemList;
    new(): DataTransferItemList;
}

interface DeferredPermissionRequest {
    id: number;
    type: string;
    uri: string;
    allow(): void;
    deny(): void;
}

declare var DeferredPermissionRequest: {
    prototype: DeferredPermissionRequest;
    new(): DeferredPermissionRequest;
}

interface DelayNode extends AudioNode {
    delayTime: AudioParam;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var DelayNode: {
    prototype: DelayNode;
    new(): DelayNode;
}

interface DeviceAcceleration {
    x: number;
    y: number;
    z: number;
}

declare var DeviceAcceleration: {
    prototype: DeviceAcceleration;
    new(): DeviceAcceleration;
}

interface DeviceMotionEvent extends Event {
    acceleration: DeviceAcceleration;
    accelerationIncludingGravity: DeviceAcceleration;
    interval: number;
    rotationRate: DeviceRotationRate;
    initDeviceMotionEvent(type: string, bubbles: boolean, cancelable: boolean, acceleration: DeviceAccelerationDict, accelerationIncludingGravity: DeviceAccelerationDict, rotationRate: DeviceRotationRateDict, interval: number): void;
}

declare var DeviceMotionEvent: {
    prototype: DeviceMotionEvent;
    new(): DeviceMotionEvent;
}

interface DeviceOrientationEvent extends Event {
    absolute: boolean;
    alpha: number;
    beta: number;
    gamma: number;
    initDeviceOrientationEvent(type: string, bubbles: boolean, cancelable: boolean, alpha: number, beta: number, gamma: number, absolute: boolean): void;
}

declare var DeviceOrientationEvent: {
    prototype: DeviceOrientationEvent;
    new(): DeviceOrientationEvent;
}

interface DeviceRotationRate {
    alpha: number;
    beta: number;
    gamma: number;
}

declare var DeviceRotationRate: {
    prototype: DeviceRotationRate;
    new(): DeviceRotationRate;
}

interface Document extends Node, GlobalEventHandlers, NodeSelector, DocumentEvent {
    URL: string;
    URLUnencoded: string;
    activeElement: Element;
    alinkColor: string;
    all: HTMLCollection;
    anchors: HTMLCollection;
    applets: HTMLCollection;
    bgColor: string;
    body: HTMLElement;
    characterSet: string;
    charset: string;
    compatMode: string;
    cookie: string;
    defaultCharset: string;
    defaultView: Window;
    designMode: string;
    dir: string;
    doctype: DocumentType;
    documentElement: Element;
    domain: string;
    embeds: HTMLCollection;
    fgColor: string;
    forms: HTMLCollection;
    fullscreenElement: Element;
    fullscreenEnabled: boolean;
    head: HTMLHeadElement;
    hidden: boolean;
    images: HTMLCollection;
    implementation: DOMImplementation;
    inputEncoding: string;
    lastModified: string;
    linkColor: string;
    links: HTMLCollection;
    location: Location;
    media: string;
    msCSSOMElementFloatMetrics: boolean;
    msCapsLockWarningOff: boolean;
    msHidden: boolean;
    msVisibilityState: string;
    onabort: (ev: Event) => any;
    onactivate: (ev: UIEvent) => any;
    onbeforeactivate: (ev: UIEvent) => any;
    onbeforedeactivate: (ev: UIEvent) => any;
    onblur: (ev: FocusEvent) => any;
    oncanplay: (ev: Event) => any;
    oncanplaythrough: (ev: Event) => any;
    onchange: (ev: Event) => any;
    onclick: (ev: MouseEvent) => any;
    oncontextmenu: (ev: PointerEvent) => any;
    ondblclick: (ev: MouseEvent) => any;
    ondeactivate: (ev: UIEvent) => any;
    ondrag: (ev: DragEvent) => any;
    ondragend: (ev: DragEvent) => any;
    ondragenter: (ev: DragEvent) => any;
    ondragleave: (ev: DragEvent) => any;
    ondragover: (ev: DragEvent) => any;
    ondragstart: (ev: DragEvent) => any;
    ondrop: (ev: DragEvent) => any;
    ondurationchange: (ev: Event) => any;
    onemptied: (ev: Event) => any;
    onended: (ev: Event) => any;
    onerror: (ev: Event) => any;
    onfocus: (ev: FocusEvent) => any;
    onfullscreenchange: (ev: Event) => any;
    onfullscreenerror: (ev: Event) => any;
    oninput: (ev: Event) => any;
    onkeydown: (ev: KeyboardEvent) => any;
    onkeypress: (ev: KeyboardEvent) => any;
    onkeyup: (ev: KeyboardEvent) => any;
    onload: (ev: Event) => any;
    onloadeddata: (ev: Event) => any;
    onloadedmetadata: (ev: Event) => any;
    onloadstart: (ev: Event) => any;
    onmousedown: (ev: MouseEvent) => any;
    onmousemove: (ev: MouseEvent) => any;
    onmouseout: (ev: MouseEvent) => any;
    onmouseover: (ev: MouseEvent) => any;
    onmouseup: (ev: MouseEvent) => any;
    onmousewheel: (ev: MouseWheelEvent) => any;
    onmscontentzoom: (ev: UIEvent) => any;
    onmsgesturechange: (ev: MSGestureEvent) => any;
    onmsgesturedoubletap: (ev: MSGestureEvent) => any;
    onmsgestureend: (ev: MSGestureEvent) => any;
    onmsgesturehold: (ev: MSGestureEvent) => any;
    onmsgesturestart: (ev: MSGestureEvent) => any;
    onmsgesturetap: (ev: MSGestureEvent) => any;
    onmsinertiastart: (ev: MSGestureEvent) => any;
    onmsmanipulationstatechanged: (ev: MSManipulationEvent) => any;
    onmspointercancel: (ev: MSPointerEvent) => any;
    onmspointerdown: (ev: MSPointerEvent) => any;
    onmspointerenter: (ev: MSPointerEvent) => any;
    onmspointerleave: (ev: MSPointerEvent) => any;
    onmspointermove: (ev: MSPointerEvent) => any;
    onmspointerout: (ev: MSPointerEvent) => any;
    onmspointerover: (ev: MSPointerEvent) => any;
    onmspointerup: (ev: MSPointerEvent) => any;
    onmssitemodejumplistitemremoved: (ev: MSSiteModeEvent) => any;
    onmsthumbnailclick: (ev: MSSiteModeEvent) => any;
    onpause: (ev: Event) => any;
    onplay: (ev: Event) => any;
    onplaying: (ev: Event) => any;
    onpointerlockchange: (ev: Event) => any;
    onpointerlockerror: (ev: Event) => any;
    onprogress: (ev: ProgressEvent) => any;
    onratechange: (ev: Event) => any;
    onreadystatechange: (ev: ProgressEvent) => any;
    onreset: (ev: Event) => any;
    onscroll: (ev: UIEvent) => any;
    onseeked: (ev: Event) => any;
    onseeking: (ev: Event) => any;
    onselect: (ev: UIEvent) => any;
    onselectstart: (ev: Event) => any;
    onstalled: (ev: Event) => any;
    onstop: (ev: Event) => any;
    onsubmit: (ev: Event) => any;
    onsuspend: (ev: Event) => any;
    ontimeupdate: (ev: Event) => any;
    ontouchcancel: (ev: TouchEvent) => any;
    ontouchend: (ev: TouchEvent) => any;
    ontouchmove: (ev: TouchEvent) => any;
    ontouchstart: (ev: TouchEvent) => any;
    onvolumechange: (ev: Event) => any;
    onwaiting: (ev: Event) => any;
    onwebkitfullscreenchange: (ev: Event) => any;
    onwebkitfullscreenerror: (ev: Event) => any;
    plugins: HTMLCollection;
    pointerLockElement: Element;
    readyState: string;
    referrer: string;
    rootElement: SVGSVGElement;
    scripts: HTMLCollection;
    security: string;
    styleSheets: StyleSheetList;
    title: string;
    visibilityState: string;
    vlinkColor: string;
    webkitCurrentFullScreenElement: Element;
    webkitFullscreenElement: Element;
    webkitFullscreenEnabled: boolean;
    webkitIsFullScreen: boolean;
    xmlEncoding: string;
    xmlStandalone: boolean;
    xmlVersion: string;
    adoptNode(source: Node): Node;
    captureEvents(): void;
    clear(): void;
    close(): void;
    createAttribute(name: string): Attr;
    createAttributeNS(namespaceURI: string, qualifiedName: string): Attr;
    createCDATASection(data: string): CDATASection;
    createComment(data: string): Comment;
    createDocumentFragment(): DocumentFragment;
    createElement(tagName: "a"): HTMLAnchorElement;
    createElement(tagName: "abbr"): HTMLPhraseElement;
    createElement(tagName: "acronym"): HTMLPhraseElement;
    createElement(tagName: "address"): HTMLBlockElement;
    createElement(tagName: "applet"): HTMLAppletElement;
    createElement(tagName: "area"): HTMLAreaElement;
    createElement(tagName: "audio"): HTMLAudioElement;
    createElement(tagName: "b"): HTMLPhraseElement;
    createElement(tagName: "base"): HTMLBaseElement;
    createElement(tagName: "basefont"): HTMLBaseFontElement;
    createElement(tagName: "bdo"): HTMLPhraseElement;
    createElement(tagName: "big"): HTMLPhraseElement;
    createElement(tagName: "blockquote"): HTMLBlockElement;
    createElement(tagName: "body"): HTMLBodyElement;
    createElement(tagName: "br"): HTMLBRElement;
    createElement(tagName: "button"): HTMLButtonElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: "caption"): HTMLTableCaptionElement;
    createElement(tagName: "center"): HTMLBlockElement;
    createElement(tagName: "cite"): HTMLPhraseElement;
    createElement(tagName: "code"): HTMLPhraseElement;
    createElement(tagName: "col"): HTMLTableColElement;
    createElement(tagName: "colgroup"): HTMLTableColElement;
    createElement(tagName: "datalist"): HTMLDataListElement;
    createElement(tagName: "dd"): HTMLDDElement;
    createElement(tagName: "del"): HTMLModElement;
    createElement(tagName: "dfn"): HTMLPhraseElement;
    createElement(tagName: "dir"): HTMLDirectoryElement;
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "dl"): HTMLDListElement;
    createElement(tagName: "dt"): HTMLDTElement;
    createElement(tagName: "em"): HTMLPhraseElement;
    createElement(tagName: "embed"): HTMLEmbedElement;
    createElement(tagName: "fieldset"): HTMLFieldSetElement;
    createElement(tagName: "font"): HTMLFontElement;
    createElement(tagName: "form"): HTMLFormElement;
    createElement(tagName: "frame"): HTMLFrameElement;
    createElement(tagName: "frameset"): HTMLFrameSetElement;
    createElement(tagName: "h1"): HTMLHeadingElement;
    createElement(tagName: "h2"): HTMLHeadingElement;
    createElement(tagName: "h3"): HTMLHeadingElement;
    createElement(tagName: "h4"): HTMLHeadingElement;
    createElement(tagName: "h5"): HTMLHeadingElement;
    createElement(tagName: "h6"): HTMLHeadingElement;
    createElement(tagName: "head"): HTMLHeadElement;
    createElement(tagName: "hr"): HTMLHRElement;
    createElement(tagName: "html"): HTMLHtmlElement;
    createElement(tagName: "i"): HTMLPhraseElement;
    createElement(tagName: "iframe"): HTMLIFrameElement;
    createElement(tagName: "img"): HTMLImageElement;
    createElement(tagName: "input"): HTMLInputElement;
    createElement(tagName: "ins"): HTMLModElement;
    createElement(tagName: "isindex"): HTMLIsIndexElement;
    createElement(tagName: "kbd"): HTMLPhraseElement;
    createElement(tagName: "keygen"): HTMLBlockElement;
    createElement(tagName: "label"): HTMLLabelElement;
    createElement(tagName: "legend"): HTMLLegendElement;
    createElement(tagName: "li"): HTMLLIElement;
    createElement(tagName: "link"): HTMLLinkElement;
    createElement(tagName: "listing"): HTMLBlockElement;
    createElement(tagName: "map"): HTMLMapElement;
    createElement(tagName: "marquee"): HTMLMarqueeElement;
    createElement(tagName: "menu"): HTMLMenuElement;
    createElement(tagName: "meta"): HTMLMetaElement;
    createElement(tagName: "nextid"): HTMLNextIdElement;
    createElement(tagName: "nobr"): HTMLPhraseElement;
    createElement(tagName: "object"): HTMLObjectElement;
    createElement(tagName: "ol"): HTMLOListElement;
    createElement(tagName: "optgroup"): HTMLOptGroupElement;
    createElement(tagName: "option"): HTMLOptionElement;
    createElement(tagName: "p"): HTMLParagraphElement;
    createElement(tagName: "param"): HTMLParamElement;
    createElement(tagName: "plaintext"): HTMLBlockElement;
    createElement(tagName: "pre"): HTMLPreElement;
    createElement(tagName: "progress"): HTMLProgressElement;
    createElement(tagName: "q"): HTMLQuoteElement;
    createElement(tagName: "rt"): HTMLPhraseElement;
    createElement(tagName: "ruby"): HTMLPhraseElement;
    createElement(tagName: "s"): HTMLPhraseElement;
    createElement(tagName: "samp"): HTMLPhraseElement;
    createElement(tagName: "script"): HTMLScriptElement;
    createElement(tagName: "select"): HTMLSelectElement;
    createElement(tagName: "small"): HTMLPhraseElement;
    createElement(tagName: "source"): HTMLSourceElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: "strike"): HTMLPhraseElement;
    createElement(tagName: "strong"): HTMLPhraseElement;
    createElement(tagName: "style"): HTMLStyleElement;
    createElement(tagName: "sub"): HTMLPhraseElement;
    createElement(tagName: "sup"): HTMLPhraseElement;
    createElement(tagName: "table"): HTMLTableElement;
    createElement(tagName: "tbody"): HTMLTableSectionElement;
    createElement(tagName: "td"): HTMLTableDataCellElement;
    createElement(tagName: "textarea"): HTMLTextAreaElement;
    createElement(tagName: "tfoot"): HTMLTableSectionElement;
    createElement(tagName: "th"): HTMLTableHeaderCellElement;
    createElement(tagName: "thead"): HTMLTableSectionElement;
    createElement(tagName: "title"): HTMLTitleElement;
    createElement(tagName: "tr"): HTMLTableRowElement;
    createElement(tagName: "track"): HTMLTrackElement;
    createElement(tagName: "tt"): HTMLPhraseElement;
    createElement(tagName: "u"): HTMLPhraseElement;
    createElement(tagName: "ul"): HTMLUListElement;
    createElement(tagName: "var"): HTMLPhraseElement;
    createElement(tagName: "video"): HTMLVideoElement;
    createElement(tagName: "x-ms-webview"): MSHTMLWebViewElement;
    createElement(tagName: "xmp"): HTMLBlockElement;
    createElement(tagName: string): HTMLElement;
    createElementNS(namespaceURI: string, qualifiedName: string): Element;
    createExpression(expression: string, resolver: XPathNSResolver): XPathExpression;
    createNSResolver(nodeResolver: Node): XPathNSResolver;
    createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter, entityReferenceExpansion?: boolean): NodeIterator;
    createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    createRange(): Range;
    createTextNode(data: string): Text;
    createTouch(view: any, target: EventTarget, identifier: number, pageX: number, pageY: number, screenX: number, screenY: number): Touch;
    createTouchList(...touches: Touch[]): TouchList;
    createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter, entityReferenceExpansion?: boolean): TreeWalker;
    elementFromPoint(x: number, y: number): Element;
    evaluate(expression: string, contextNode: Node, resolver: XPathNSResolver, type: number, result: XPathResult): XPathResult;
    execCommand(commandId: string, showUI?: boolean, value?: any): boolean;
    execCommandShowHelp(commandId: string): boolean;
    exitFullscreen(): void;
    exitPointerLock(): void;
    focus(): void;
    getElementById(elementId: string): HTMLElement;
    getElementsByClassName(classNames: string): NodeList;
    getElementsByName(elementName: string): NodeList;
    getElementsByTagName(tagname: "a"): NodeListOf<HTMLAnchorElement>;
    getElementsByTagName(tagname: "abbr"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "acronym"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "address"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(tagname: "applet"): NodeListOf<HTMLAppletElement>;
    getElementsByTagName(tagname: "area"): NodeListOf<HTMLAreaElement>;
    getElementsByTagName(tagname: "article"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "aside"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "audio"): NodeListOf<HTMLAudioElement>;
    getElementsByTagName(tagname: "b"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "base"): NodeListOf<HTMLBaseElement>;
    getElementsByTagName(tagname: "basefont"): NodeListOf<HTMLBaseFontElement>;
    getElementsByTagName(tagname: "bdo"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "big"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "blockquote"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(tagname: "body"): NodeListOf<HTMLBodyElement>;
    getElementsByTagName(tagname: "br"): NodeListOf<HTMLBRElement>;
    getElementsByTagName(tagname: "button"): NodeListOf<HTMLButtonElement>;
    getElementsByTagName(tagname: "canvas"): NodeListOf<HTMLCanvasElement>;
    getElementsByTagName(tagname: "caption"): NodeListOf<HTMLTableCaptionElement>;
    getElementsByTagName(tagname: "center"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(tagname: "circle"): NodeListOf<SVGCircleElement>;
    getElementsByTagName(tagname: "cite"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "clipPath"): NodeListOf<SVGClipPathElement>;
    getElementsByTagName(tagname: "code"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "col"): NodeListOf<HTMLTableColElement>;
    getElementsByTagName(tagname: "colgroup"): NodeListOf<HTMLTableColElement>;
    getElementsByTagName(tagname: "datalist"): NodeListOf<HTMLDataListElement>;
    getElementsByTagName(tagname: "dd"): NodeListOf<HTMLDDElement>;
    getElementsByTagName(tagname: "defs"): NodeListOf<SVGDefsElement>;
    getElementsByTagName(tagname: "del"): NodeListOf<HTMLModElement>;
    getElementsByTagName(tagname: "desc"): NodeListOf<SVGDescElement>;
    getElementsByTagName(tagname: "dfn"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "dir"): NodeListOf<HTMLDirectoryElement>;
    getElementsByTagName(tagname: "div"): NodeListOf<HTMLDivElement>;
    getElementsByTagName(tagname: "dl"): NodeListOf<HTMLDListElement>;
    getElementsByTagName(tagname: "dt"): NodeListOf<HTMLDTElement>;
    getElementsByTagName(tagname: "ellipse"): NodeListOf<SVGEllipseElement>;
    getElementsByTagName(tagname: "em"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "embed"): NodeListOf<HTMLEmbedElement>;
    getElementsByTagName(tagname: "feBlend"): NodeListOf<SVGFEBlendElement>;
    getElementsByTagName(tagname: "feColorMatrix"): NodeListOf<SVGFEColorMatrixElement>;
    getElementsByTagName(tagname: "feComponentTransfer"): NodeListOf<SVGFEComponentTransferElement>;
    getElementsByTagName(tagname: "feComposite"): NodeListOf<SVGFECompositeElement>;
    getElementsByTagName(tagname: "feConvolveMatrix"): NodeListOf<SVGFEConvolveMatrixElement>;
    getElementsByTagName(tagname: "feDiffuseLighting"): NodeListOf<SVGFEDiffuseLightingElement>;
    getElementsByTagName(tagname: "feDisplacementMap"): NodeListOf<SVGFEDisplacementMapElement>;
    getElementsByTagName(tagname: "feDistantLight"): NodeListOf<SVGFEDistantLightElement>;
    getElementsByTagName(tagname: "feFlood"): NodeListOf<SVGFEFloodElement>;
    getElementsByTagName(tagname: "feFuncA"): NodeListOf<SVGFEFuncAElement>;
    getElementsByTagName(tagname: "feFuncB"): NodeListOf<SVGFEFuncBElement>;
    getElementsByTagName(tagname: "feFuncG"): NodeListOf<SVGFEFuncGElement>;
    getElementsByTagName(tagname: "feFuncR"): NodeListOf<SVGFEFuncRElement>;
    getElementsByTagName(tagname: "feGaussianBlur"): NodeListOf<SVGFEGaussianBlurElement>;
    getElementsByTagName(tagname: "feImage"): NodeListOf<SVGFEImageElement>;
    getElementsByTagName(tagname: "feMerge"): NodeListOf<SVGFEMergeElement>;
    getElementsByTagName(tagname: "feMergeNode"): NodeListOf<SVGFEMergeNodeElement>;
    getElementsByTagName(tagname: "feMorphology"): NodeListOf<SVGFEMorphologyElement>;
    getElementsByTagName(tagname: "feOffset"): NodeListOf<SVGFEOffsetElement>;
    getElementsByTagName(tagname: "fePointLight"): NodeListOf<SVGFEPointLightElement>;
    getElementsByTagName(tagname: "feSpecularLighting"): NodeListOf<SVGFESpecularLightingElement>;
    getElementsByTagName(tagname: "feSpotLight"): NodeListOf<SVGFESpotLightElement>;
    getElementsByTagName(tagname: "feTile"): NodeListOf<SVGFETileElement>;
    getElementsByTagName(tagname: "feTurbulence"): NodeListOf<SVGFETurbulenceElement>;
    getElementsByTagName(tagname: "fieldset"): NodeListOf<HTMLFieldSetElement>;
    getElementsByTagName(tagname: "figcaption"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "figure"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "filter"): NodeListOf<SVGFilterElement>;
    getElementsByTagName(tagname: "font"): NodeListOf<HTMLFontElement>;
    getElementsByTagName(tagname: "footer"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "foreignObject"): NodeListOf<SVGForeignObjectElement>;
    getElementsByTagName(tagname: "form"): NodeListOf<HTMLFormElement>;
    getElementsByTagName(tagname: "frame"): NodeListOf<HTMLFrameElement>;
    getElementsByTagName(tagname: "frameset"): NodeListOf<HTMLFrameSetElement>;
    getElementsByTagName(tagname: "g"): NodeListOf<SVGGElement>;
    getElementsByTagName(tagname: "h1"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(tagname: "h2"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(tagname: "h3"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(tagname: "h4"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(tagname: "h5"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(tagname: "h6"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(tagname: "head"): NodeListOf<HTMLHeadElement>;
    getElementsByTagName(tagname: "header"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "hgroup"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "hr"): NodeListOf<HTMLHRElement>;
    getElementsByTagName(tagname: "html"): NodeListOf<HTMLHtmlElement>;
    getElementsByTagName(tagname: "i"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "iframe"): NodeListOf<HTMLIFrameElement>;
    getElementsByTagName(tagname: "image"): NodeListOf<SVGImageElement>;
    getElementsByTagName(tagname: "img"): NodeListOf<HTMLImageElement>;
    getElementsByTagName(tagname: "input"): NodeListOf<HTMLInputElement>;
    getElementsByTagName(tagname: "ins"): NodeListOf<HTMLModElement>;
    getElementsByTagName(tagname: "isindex"): NodeListOf<HTMLIsIndexElement>;
    getElementsByTagName(tagname: "kbd"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "keygen"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(tagname: "label"): NodeListOf<HTMLLabelElement>;
    getElementsByTagName(tagname: "legend"): NodeListOf<HTMLLegendElement>;
    getElementsByTagName(tagname: "li"): NodeListOf<HTMLLIElement>;
    getElementsByTagName(tagname: "line"): NodeListOf<SVGLineElement>;
    getElementsByTagName(tagname: "linearGradient"): NodeListOf<SVGLinearGradientElement>;
    getElementsByTagName(tagname: "link"): NodeListOf<HTMLLinkElement>;
    getElementsByTagName(tagname: "listing"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(tagname: "map"): NodeListOf<HTMLMapElement>;
    getElementsByTagName(tagname: "mark"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "marker"): NodeListOf<SVGMarkerElement>;
    getElementsByTagName(tagname: "marquee"): NodeListOf<HTMLMarqueeElement>;
    getElementsByTagName(tagname: "mask"): NodeListOf<SVGMaskElement>;
    getElementsByTagName(tagname: "menu"): NodeListOf<HTMLMenuElement>;
    getElementsByTagName(tagname: "meta"): NodeListOf<HTMLMetaElement>;
    getElementsByTagName(tagname: "metadata"): NodeListOf<SVGMetadataElement>;
    getElementsByTagName(tagname: "nav"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "nextid"): NodeListOf<HTMLNextIdElement>;
    getElementsByTagName(tagname: "nobr"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "noframes"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "noscript"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "object"): NodeListOf<HTMLObjectElement>;
    getElementsByTagName(tagname: "ol"): NodeListOf<HTMLOListElement>;
    getElementsByTagName(tagname: "optgroup"): NodeListOf<HTMLOptGroupElement>;
    getElementsByTagName(tagname: "option"): NodeListOf<HTMLOptionElement>;
    getElementsByTagName(tagname: "p"): NodeListOf<HTMLParagraphElement>;
    getElementsByTagName(tagname: "param"): NodeListOf<HTMLParamElement>;
    getElementsByTagName(tagname: "path"): NodeListOf<SVGPathElement>;
    getElementsByTagName(tagname: "pattern"): NodeListOf<SVGPatternElement>;
    getElementsByTagName(tagname: "plaintext"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(tagname: "polygon"): NodeListOf<SVGPolygonElement>;
    getElementsByTagName(tagname: "polyline"): NodeListOf<SVGPolylineElement>;
    getElementsByTagName(tagname: "pre"): NodeListOf<HTMLPreElement>;
    getElementsByTagName(tagname: "progress"): NodeListOf<HTMLProgressElement>;
    getElementsByTagName(tagname: "q"): NodeListOf<HTMLQuoteElement>;
    getElementsByTagName(tagname: "radialGradient"): NodeListOf<SVGRadialGradientElement>;
    getElementsByTagName(tagname: "rect"): NodeListOf<SVGRectElement>;
    getElementsByTagName(tagname: "rt"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "ruby"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "s"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "samp"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "script"): NodeListOf<HTMLScriptElement>;
    getElementsByTagName(tagname: "section"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "select"): NodeListOf<HTMLSelectElement>;
    getElementsByTagName(tagname: "small"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "source"): NodeListOf<HTMLSourceElement>;
    getElementsByTagName(tagname: "span"): NodeListOf<HTMLSpanElement>;
    getElementsByTagName(tagname: "stop"): NodeListOf<SVGStopElement>;
    getElementsByTagName(tagname: "strike"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "strong"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "style"): NodeListOf<HTMLStyleElement>;
    getElementsByTagName(tagname: "sub"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "sup"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "svg"): NodeListOf<SVGSVGElement>;
    getElementsByTagName(tagname: "switch"): NodeListOf<SVGSwitchElement>;
    getElementsByTagName(tagname: "symbol"): NodeListOf<SVGSymbolElement>;
    getElementsByTagName(tagname: "table"): NodeListOf<HTMLTableElement>;
    getElementsByTagName(tagname: "tbody"): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName(tagname: "td"): NodeListOf<HTMLTableDataCellElement>;
    getElementsByTagName(tagname: "text"): NodeListOf<SVGTextElement>;
    getElementsByTagName(tagname: "textPath"): NodeListOf<SVGTextPathElement>;
    getElementsByTagName(tagname: "textarea"): NodeListOf<HTMLTextAreaElement>;
    getElementsByTagName(tagname: "tfoot"): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName(tagname: "th"): NodeListOf<HTMLTableHeaderCellElement>;
    getElementsByTagName(tagname: "thead"): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName(tagname: "title"): NodeListOf<HTMLTitleElement>;
    getElementsByTagName(tagname: "tr"): NodeListOf<HTMLTableRowElement>;
    getElementsByTagName(tagname: "track"): NodeListOf<HTMLTrackElement>;
    getElementsByTagName(tagname: "tspan"): NodeListOf<SVGTSpanElement>;
    getElementsByTagName(tagname: "tt"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "u"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "ul"): NodeListOf<HTMLUListElement>;
    getElementsByTagName(tagname: "use"): NodeListOf<SVGUseElement>;
    getElementsByTagName(tagname: "var"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(tagname: "video"): NodeListOf<HTMLVideoElement>;
    getElementsByTagName(tagname: "view"): NodeListOf<SVGViewElement>;
    getElementsByTagName(tagname: "wbr"): NodeListOf<HTMLElement>;
    getElementsByTagName(tagname: "x-ms-webview"): NodeListOf<MSHTMLWebViewElement>;
    getElementsByTagName(tagname: "xmp"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(tagname: string): NodeList;
    getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;
    getSelection(): Selection;
    hasFocus(): boolean;
    importNode(importedNode: Node, deep: boolean): Node;
    msElementsFromPoint(x: number, y: number): NodeList;
    msElementsFromRect(left: number, top: number, width: number, height: number): NodeList;
    msGetPrintDocumentForNamedFlow(flowName: string): Document;
    msSetPrintDocumentUriForNamedFlow(flowName: string, uri: string): void;
    open(url?: string, name?: string, features?: string, replace?: boolean): Document;
    open(url?: string, name?: string, features?: string, replace?: boolean): Window;
    queryCommandEnabled(commandId: string): boolean;
    queryCommandIndeterm(commandId: string): boolean;
    queryCommandState(commandId: string): boolean;
    queryCommandSupported(commandId: string): boolean;
    queryCommandText(commandId: string): string;
    queryCommandValue(commandId: string): string;
    releaseEvents(): void;
    updateSettings(): void;
    webkitCancelFullScreen(): void;
    webkitExitFullscreen(): void;
    write(...content: string[]): void;
    writeln(...content: string[]): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "fullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "fullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSContentZoom", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSManipulationStateChanged", listener: (ev: MSManipulationEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mssitemodejumplistitemremoved", listener: (ev: MSSiteModeEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "msthumbnailclick", listener: (ev: MSSiteModeEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerlockchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerlockerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "stop", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var Document: {
    prototype: Document;
    new(): Document;
}

interface DocumentFragment extends Node, NodeSelector {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var DocumentFragment: {
    prototype: DocumentFragment;
    new(): DocumentFragment;
}

interface DocumentType extends Node, ChildNode {
    entities: NamedNodeMap;
    internalSubset: string;
    name: string;
    notations: NamedNodeMap;
    publicId: string;
    systemId: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var DocumentType: {
    prototype: DocumentType;
    new(): DocumentType;
}

interface DragEvent extends MouseEvent {
    dataTransfer: DataTransfer;
    initDragEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, dataTransferArg: DataTransfer): void;
    msConvertURL(file: File, targetType: string, targetURL?: string): void;
}

declare var DragEvent: {
    prototype: DragEvent;
    new(): DragEvent;
}

interface DynamicsCompressorNode extends AudioNode {
    attack: AudioParam;
    knee: AudioParam;
    ratio: AudioParam;
    reduction: AudioParam;
    release: AudioParam;
    threshold: AudioParam;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var DynamicsCompressorNode: {
    prototype: DynamicsCompressorNode;
    new(): DynamicsCompressorNode;
}

interface EXT_texture_filter_anisotropic {
    MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
    TEXTURE_MAX_ANISOTROPY_EXT: number;
}

declare var EXT_texture_filter_anisotropic: {
    prototype: EXT_texture_filter_anisotropic;
    new(): EXT_texture_filter_anisotropic;
    MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
    TEXTURE_MAX_ANISOTROPY_EXT: number;
}

interface Element extends Node, GlobalEventHandlers, ElementTraversal, NodeSelector, ChildNode {
    classList: DOMTokenList;
    clientHeight: number;
    clientLeft: number;
    clientTop: number;
    clientWidth: number;
    msContentZoomFactor: number;
    msRegionOverflow: string;
    onariarequest: (ev: AriaRequestEvent) => any;
    oncommand: (ev: CommandEvent) => any;
    ongotpointercapture: (ev: PointerEvent) => any;
    onlostpointercapture: (ev: PointerEvent) => any;
    onmsgesturechange: (ev: MSGestureEvent) => any;
    onmsgesturedoubletap: (ev: MSGestureEvent) => any;
    onmsgestureend: (ev: MSGestureEvent) => any;
    onmsgesturehold: (ev: MSGestureEvent) => any;
    onmsgesturestart: (ev: MSGestureEvent) => any;
    onmsgesturetap: (ev: MSGestureEvent) => any;
    onmsgotpointercapture: (ev: MSPointerEvent) => any;
    onmsinertiastart: (ev: MSGestureEvent) => any;
    onmslostpointercapture: (ev: MSPointerEvent) => any;
    onmspointercancel: (ev: MSPointerEvent) => any;
    onmspointerdown: (ev: MSPointerEvent) => any;
    onmspointerenter: (ev: MSPointerEvent) => any;
    onmspointerleave: (ev: MSPointerEvent) => any;
    onmspointermove: (ev: MSPointerEvent) => any;
    onmspointerout: (ev: MSPointerEvent) => any;
    onmspointerover: (ev: MSPointerEvent) => any;
    onmspointerup: (ev: MSPointerEvent) => any;
    ontouchcancel: (ev: TouchEvent) => any;
    ontouchend: (ev: TouchEvent) => any;
    ontouchmove: (ev: TouchEvent) => any;
    ontouchstart: (ev: TouchEvent) => any;
    onwebkitfullscreenchange: (ev: Event) => any;
    onwebkitfullscreenerror: (ev: Event) => any;
    scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
    scrollWidth: number;
    tagName: string;
    getAttribute(name?: string): string;
    getAttributeNS(namespaceURI: string, localName: string): string;
    getAttributeNode(name: string): Attr;
    getAttributeNodeNS(namespaceURI: string, localName: string): Attr;
    getBoundingClientRect(): ClientRect;
    getClientRects(): ClientRectList;
    getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;
    getElementsByTagName(name: "abbr"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "acronym"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "address"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "applet"): NodeListOf<HTMLAppletElement>;
    getElementsByTagName(name: "area"): NodeListOf<HTMLAreaElement>;
    getElementsByTagName(name: "article"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "aside"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "audio"): NodeListOf<HTMLAudioElement>;
    getElementsByTagName(name: "b"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "base"): NodeListOf<HTMLBaseElement>;
    getElementsByTagName(name: "basefont"): NodeListOf<HTMLBaseFontElement>;
    getElementsByTagName(name: "bdo"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "big"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "blockquote"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
    getElementsByTagName(name: "br"): NodeListOf<HTMLBRElement>;
    getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
    getElementsByTagName(name: "canvas"): NodeListOf<HTMLCanvasElement>;
    getElementsByTagName(name: "caption"): NodeListOf<HTMLTableCaptionElement>;
    getElementsByTagName(name: "center"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "circle"): NodeListOf<SVGCircleElement>;
    getElementsByTagName(name: "cite"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "clipPath"): NodeListOf<SVGClipPathElement>;
    getElementsByTagName(name: "code"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "col"): NodeListOf<HTMLTableColElement>;
    getElementsByTagName(name: "colgroup"): NodeListOf<HTMLTableColElement>;
    getElementsByTagName(name: "datalist"): NodeListOf<HTMLDataListElement>;
    getElementsByTagName(name: "dd"): NodeListOf<HTMLDDElement>;
    getElementsByTagName(name: "defs"): NodeListOf<SVGDefsElement>;
    getElementsByTagName(name: "del"): NodeListOf<HTMLModElement>;
    getElementsByTagName(name: "desc"): NodeListOf<SVGDescElement>;
    getElementsByTagName(name: "dfn"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "dir"): NodeListOf<HTMLDirectoryElement>;
    getElementsByTagName(name: "div"): NodeListOf<HTMLDivElement>;
    getElementsByTagName(name: "dl"): NodeListOf<HTMLDListElement>;
    getElementsByTagName(name: "dt"): NodeListOf<HTMLDTElement>;
    getElementsByTagName(name: "ellipse"): NodeListOf<SVGEllipseElement>;
    getElementsByTagName(name: "em"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "embed"): NodeListOf<HTMLEmbedElement>;
    getElementsByTagName(name: "feBlend"): NodeListOf<SVGFEBlendElement>;
    getElementsByTagName(name: "feColorMatrix"): NodeListOf<SVGFEColorMatrixElement>;
    getElementsByTagName(name: "feComponentTransfer"): NodeListOf<SVGFEComponentTransferElement>;
    getElementsByTagName(name: "feComposite"): NodeListOf<SVGFECompositeElement>;
    getElementsByTagName(name: "feConvolveMatrix"): NodeListOf<SVGFEConvolveMatrixElement>;
    getElementsByTagName(name: "feDiffuseLighting"): NodeListOf<SVGFEDiffuseLightingElement>;
    getElementsByTagName(name: "feDisplacementMap"): NodeListOf<SVGFEDisplacementMapElement>;
    getElementsByTagName(name: "feDistantLight"): NodeListOf<SVGFEDistantLightElement>;
    getElementsByTagName(name: "feFlood"): NodeListOf<SVGFEFloodElement>;
    getElementsByTagName(name: "feFuncA"): NodeListOf<SVGFEFuncAElement>;
    getElementsByTagName(name: "feFuncB"): NodeListOf<SVGFEFuncBElement>;
    getElementsByTagName(name: "feFuncG"): NodeListOf<SVGFEFuncGElement>;
    getElementsByTagName(name: "feFuncR"): NodeListOf<SVGFEFuncRElement>;
    getElementsByTagName(name: "feGaussianBlur"): NodeListOf<SVGFEGaussianBlurElement>;
    getElementsByTagName(name: "feImage"): NodeListOf<SVGFEImageElement>;
    getElementsByTagName(name: "feMerge"): NodeListOf<SVGFEMergeElement>;
    getElementsByTagName(name: "feMergeNode"): NodeListOf<SVGFEMergeNodeElement>;
    getElementsByTagName(name: "feMorphology"): NodeListOf<SVGFEMorphologyElement>;
    getElementsByTagName(name: "feOffset"): NodeListOf<SVGFEOffsetElement>;
    getElementsByTagName(name: "fePointLight"): NodeListOf<SVGFEPointLightElement>;
    getElementsByTagName(name: "feSpecularLighting"): NodeListOf<SVGFESpecularLightingElement>;
    getElementsByTagName(name: "feSpotLight"): NodeListOf<SVGFESpotLightElement>;
    getElementsByTagName(name: "feTile"): NodeListOf<SVGFETileElement>;
    getElementsByTagName(name: "feTurbulence"): NodeListOf<SVGFETurbulenceElement>;
    getElementsByTagName(name: "fieldset"): NodeListOf<HTMLFieldSetElement>;
    getElementsByTagName(name: "figcaption"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "figure"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "filter"): NodeListOf<SVGFilterElement>;
    getElementsByTagName(name: "font"): NodeListOf<HTMLFontElement>;
    getElementsByTagName(name: "footer"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "foreignObject"): NodeListOf<SVGForeignObjectElement>;
    getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;
    getElementsByTagName(name: "frame"): NodeListOf<HTMLFrameElement>;
    getElementsByTagName(name: "frameset"): NodeListOf<HTMLFrameSetElement>;
    getElementsByTagName(name: "g"): NodeListOf<SVGGElement>;
    getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h2"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h3"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h4"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h5"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "h6"): NodeListOf<HTMLHeadingElement>;
    getElementsByTagName(name: "head"): NodeListOf<HTMLHeadElement>;
    getElementsByTagName(name: "header"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "hgroup"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "hr"): NodeListOf<HTMLHRElement>;
    getElementsByTagName(name: "html"): NodeListOf<HTMLHtmlElement>;
    getElementsByTagName(name: "i"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "iframe"): NodeListOf<HTMLIFrameElement>;
    getElementsByTagName(name: "image"): NodeListOf<SVGImageElement>;
    getElementsByTagName(name: "img"): NodeListOf<HTMLImageElement>;
    getElementsByTagName(name: "input"): NodeListOf<HTMLInputElement>;
    getElementsByTagName(name: "ins"): NodeListOf<HTMLModElement>;
    getElementsByTagName(name: "isindex"): NodeListOf<HTMLIsIndexElement>;
    getElementsByTagName(name: "kbd"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "keygen"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "label"): NodeListOf<HTMLLabelElement>;
    getElementsByTagName(name: "legend"): NodeListOf<HTMLLegendElement>;
    getElementsByTagName(name: "li"): NodeListOf<HTMLLIElement>;
    getElementsByTagName(name: "line"): NodeListOf<SVGLineElement>;
    getElementsByTagName(name: "linearGradient"): NodeListOf<SVGLinearGradientElement>;
    getElementsByTagName(name: "link"): NodeListOf<HTMLLinkElement>;
    getElementsByTagName(name: "listing"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "map"): NodeListOf<HTMLMapElement>;
    getElementsByTagName(name: "mark"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "marker"): NodeListOf<SVGMarkerElement>;
    getElementsByTagName(name: "marquee"): NodeListOf<HTMLMarqueeElement>;
    getElementsByTagName(name: "mask"): NodeListOf<SVGMaskElement>;
    getElementsByTagName(name: "menu"): NodeListOf<HTMLMenuElement>;
    getElementsByTagName(name: "meta"): NodeListOf<HTMLMetaElement>;
    getElementsByTagName(name: "metadata"): NodeListOf<SVGMetadataElement>;
    getElementsByTagName(name: "nav"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "nextid"): NodeListOf<HTMLNextIdElement>;
    getElementsByTagName(name: "nobr"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "noframes"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "noscript"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "object"): NodeListOf<HTMLObjectElement>;
    getElementsByTagName(name: "ol"): NodeListOf<HTMLOListElement>;
    getElementsByTagName(name: "optgroup"): NodeListOf<HTMLOptGroupElement>;
    getElementsByTagName(name: "option"): NodeListOf<HTMLOptionElement>;
    getElementsByTagName(name: "p"): NodeListOf<HTMLParagraphElement>;
    getElementsByTagName(name: "param"): NodeListOf<HTMLParamElement>;
    getElementsByTagName(name: "path"): NodeListOf<SVGPathElement>;
    getElementsByTagName(name: "pattern"): NodeListOf<SVGPatternElement>;
    getElementsByTagName(name: "plaintext"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: "polygon"): NodeListOf<SVGPolygonElement>;
    getElementsByTagName(name: "polyline"): NodeListOf<SVGPolylineElement>;
    getElementsByTagName(name: "pre"): NodeListOf<HTMLPreElement>;
    getElementsByTagName(name: "progress"): NodeListOf<HTMLProgressElement>;
    getElementsByTagName(name: "q"): NodeListOf<HTMLQuoteElement>;
    getElementsByTagName(name: "radialGradient"): NodeListOf<SVGRadialGradientElement>;
    getElementsByTagName(name: "rect"): NodeListOf<SVGRectElement>;
    getElementsByTagName(name: "rt"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "ruby"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "s"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "samp"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "script"): NodeListOf<HTMLScriptElement>;
    getElementsByTagName(name: "section"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "select"): NodeListOf<HTMLSelectElement>;
    getElementsByTagName(name: "small"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "source"): NodeListOf<HTMLSourceElement>;
    getElementsByTagName(name: "span"): NodeListOf<HTMLSpanElement>;
    getElementsByTagName(name: "stop"): NodeListOf<SVGStopElement>;
    getElementsByTagName(name: "strike"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "strong"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "style"): NodeListOf<HTMLStyleElement>;
    getElementsByTagName(name: "sub"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "sup"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "svg"): NodeListOf<SVGSVGElement>;
    getElementsByTagName(name: "switch"): NodeListOf<SVGSwitchElement>;
    getElementsByTagName(name: "symbol"): NodeListOf<SVGSymbolElement>;
    getElementsByTagName(name: "table"): NodeListOf<HTMLTableElement>;
    getElementsByTagName(name: "tbody"): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName(name: "td"): NodeListOf<HTMLTableDataCellElement>;
    getElementsByTagName(name: "text"): NodeListOf<SVGTextElement>;
    getElementsByTagName(name: "textPath"): NodeListOf<SVGTextPathElement>;
    getElementsByTagName(name: "textarea"): NodeListOf<HTMLTextAreaElement>;
    getElementsByTagName(name: "tfoot"): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName(name: "th"): NodeListOf<HTMLTableHeaderCellElement>;
    getElementsByTagName(name: "thead"): NodeListOf<HTMLTableSectionElement>;
    getElementsByTagName(name: "title"): NodeListOf<HTMLTitleElement>;
    getElementsByTagName(name: "tr"): NodeListOf<HTMLTableRowElement>;
    getElementsByTagName(name: "track"): NodeListOf<HTMLTrackElement>;
    getElementsByTagName(name: "tspan"): NodeListOf<SVGTSpanElement>;
    getElementsByTagName(name: "tt"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "u"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "ul"): NodeListOf<HTMLUListElement>;
    getElementsByTagName(name: "use"): NodeListOf<SVGUseElement>;
    getElementsByTagName(name: "var"): NodeListOf<HTMLPhraseElement>;
    getElementsByTagName(name: "video"): NodeListOf<HTMLVideoElement>;
    getElementsByTagName(name: "view"): NodeListOf<SVGViewElement>;
    getElementsByTagName(name: "wbr"): NodeListOf<HTMLElement>;
    getElementsByTagName(name: "x-ms-webview"): NodeListOf<MSHTMLWebViewElement>;
    getElementsByTagName(name: "xmp"): NodeListOf<HTMLBlockElement>;
    getElementsByTagName(name: string): NodeList;
    getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;
    hasAttribute(name: string): boolean;
    hasAttributeNS(namespaceURI: string, localName: string): boolean;
    msGetRegionContent(): MSRangeCollection;
    msGetUntransformedBounds(): ClientRect;
    msMatchesSelector(selectors: string): boolean;
    msReleasePointerCapture(pointerId: number): void;
    msSetPointerCapture(pointerId: number): void;
    msZoomTo(args: MsZoomToOptions): void;
    releasePointerCapture(pointerId: number): void;
    removeAttribute(name?: string): void;
    removeAttributeNS(namespaceURI: string, localName: string): void;
    removeAttributeNode(oldAttr: Attr): Attr;
    requestFullscreen(): void;
    requestPointerLock(): void;
    setAttribute(name?: string, value?: string): void;
    setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): void;
    setAttributeNode(newAttr: Attr): Attr;
    setAttributeNodeNS(newAttr: Attr): Attr;
    setPointerCapture(pointerId: number): void;
    webkitMatchesSelector(selectors: string): boolean;
    webkitRequestFullScreen(): void;
    webkitRequestFullscreen(): void;
    addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var Element: {
    prototype: Element;
    new(): Element;
}

interface ErrorEvent extends Event {
    colno: number;
    error: any;
    filename: string;
    lineno: number;
    message: string;
    initErrorEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, messageArg: string, filenameArg: string, linenoArg: number): void;
}

declare var ErrorEvent: {
    prototype: ErrorEvent;
    new(): ErrorEvent;
}

interface Event {
    bubbles: boolean;
    cancelBubble: boolean;
    cancelable: boolean;
    currentTarget: EventTarget;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    returnValue: boolean;
    srcElement: Element;
    target: EventTarget;
    timeStamp: number;
    type: string;
    initEvent(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
    CAPTURING_PHASE: number;
}

declare var Event: {
    prototype: Event;
    new(type: string, eventInitDict?: EventInit): Event;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
    CAPTURING_PHASE: number;
}

interface EventTarget {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
    dispatchEvent(evt: Event): boolean;
    removeEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var EventTarget: {
    prototype: EventTarget;
    new(): EventTarget;
}

interface External {
}

declare var External: {
    prototype: External;
    new(): External;
}

interface File extends Blob {
    lastModifiedDate: any;
    name: string;
}

declare var File: {
    prototype: File;
    new(): File;
}

interface FileList {
    length: number;
    item(index: number): File;
    [index: number]: File;
}

declare var FileList: {
    prototype: FileList;
    new(): FileList;
}

interface FileReader extends EventTarget, MSBaseReader {
    error: DOMError;
    readAsArrayBuffer(blob: Blob): void;
    readAsBinaryString(blob: Blob): void;
    readAsDataURL(blob: Blob): void;
    readAsText(blob: Blob, encoding?: string): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var FileReader: {
    prototype: FileReader;
    new(): FileReader;
}

interface FocusEvent extends UIEvent {
    relatedTarget: EventTarget;
    initFocusEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, relatedTargetArg: EventTarget): void;
}

declare var FocusEvent: {
    prototype: FocusEvent;
    new(typeArg: string, eventInitDict?: FocusEventInit): FocusEvent;
}

interface FormData {
    append(name: any, value: any, blobName?: string): void;
}

declare var FormData: {
    prototype: FormData;
    new(): FormData;
}

interface GainNode extends AudioNode {
    gain: AudioParam;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var GainNode: {
    prototype: GainNode;
    new(): GainNode;
}

interface Gamepad {
    axes: number[];
    buttons: GamepadButton[];
    connected: boolean;
    id: string;
    index: number;
    mapping: string;
    timestamp: number;
}

declare var Gamepad: {
    prototype: Gamepad;
    new(): Gamepad;
}

interface GamepadButton {
    pressed: boolean;
    value: number;
}

declare var GamepadButton: {
    prototype: GamepadButton;
    new(): GamepadButton;
}

interface GamepadEvent extends Event {
    gamepad: Gamepad;
}

declare var GamepadEvent: {
    prototype: GamepadEvent;
    new(): GamepadEvent;
}

interface Geolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
    watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;
}

declare var Geolocation: {
    prototype: Geolocation;
    new(): Geolocation;
}

interface HTMLAllCollection extends HTMLCollection {
    namedItem(name: string): Element;
}

declare var HTMLAllCollection: {
    prototype: HTMLAllCollection;
    new(): HTMLAllCollection;
}

interface HTMLAnchorElement extends HTMLElement {
    Methods: string;
    charset: string;
    coords: string;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    hreflang: string;
    mimeType: string;
    name: string;
    nameProp: string;
    pathname: string;
    port: string;
    protocol: string;
    protocolLong: string;
    rel: string;
    rev: string;
    search: string;
    shape: string;
    target: string;
    text: string;
    type: string;
    urn: string;
    toString(): string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLAnchorElement: {
    prototype: HTMLAnchorElement;
    new(): HTMLAnchorElement;
}

interface HTMLAppletElement extends HTMLElement {
    BaseHref: string;
    align: string;
    alt: string;
    altHtml: string;
    archive: string;
    border: string;
    code: string;
    codeBase: string;
    codeType: string;
    contentDocument: Document;
    data: string;
    declare: boolean;
    form: HTMLFormElement;
    height: string;
    hspace: number;
    name: string;
    object: string;
    standby: string;
    type: string;
    useMap: string;
    vspace: number;
    width: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLAppletElement: {
    prototype: HTMLAppletElement;
    new(): HTMLAppletElement;
}

interface HTMLAreaElement extends HTMLElement {
    alt: string;
    coords: string;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    noHref: boolean;
    pathname: string;
    port: string;
    protocol: string;
    rel: string;
    search: string;
    shape: string;
    target: string;
    toString(): string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLAreaElement: {
    prototype: HTMLAreaElement;
    new(): HTMLAreaElement;
}

interface HTMLAreasCollection extends HTMLCollection {
    add(element: HTMLElement, before?: HTMLElement): void;
    add(element: HTMLElement, before?: number): void;
    remove(index?: number): void;
}

declare var HTMLAreasCollection: {
    prototype: HTMLAreasCollection;
    new(): HTMLAreasCollection;
}

interface HTMLAudioElement extends HTMLMediaElement {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLAudioElement: {
    prototype: HTMLAudioElement;
    new(): HTMLAudioElement;
}

interface HTMLBRElement extends HTMLElement {
    clear: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLBRElement: {
    prototype: HTMLBRElement;
    new(): HTMLBRElement;
}

interface HTMLBaseElement extends HTMLElement {
    href: string;
    target: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLBaseElement: {
    prototype: HTMLBaseElement;
    new(): HTMLBaseElement;
}

interface HTMLBaseFontElement extends HTMLElement, DOML2DeprecatedColorProperty {
    face: string;
    size: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLBaseFontElement: {
    prototype: HTMLBaseFontElement;
    new(): HTMLBaseFontElement;
}

interface HTMLBlockElement extends HTMLElement {
    cite: string;
    clear: string;
    width: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLBlockElement: {
    prototype: HTMLBlockElement;
    new(): HTMLBlockElement;
}

interface HTMLBodyElement extends HTMLElement {
    aLink: any;
    background: string;
    bgColor: any;
    bgProperties: string;
    link: any;
    noWrap: boolean;
    onafterprint: (ev: Event) => any;
    onbeforeprint: (ev: Event) => any;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    onblur: (ev: FocusEvent) => any;
    onerror: (ev: Event) => any;
    onfocus: (ev: FocusEvent) => any;
    onhashchange: (ev: HashChangeEvent) => any;
    onload: (ev: Event) => any;
    onmessage: (ev: MessageEvent) => any;
    onoffline: (ev: Event) => any;
    ononline: (ev: Event) => any;
    onorientationchange: (ev: Event) => any;
    onpagehide: (ev: PageTransitionEvent) => any;
    onpageshow: (ev: PageTransitionEvent) => any;
    onpopstate: (ev: PopStateEvent) => any;
    onresize: (ev: UIEvent) => any;
    onstorage: (ev: StorageEvent) => any;
    onunload: (ev: Event) => any;
    text: any;
    vLink: any;
    createTextRange(): TextRange;
    addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "hashchange", listener: (ev: HashChangeEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "orientationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSContentZoom", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSManipulationStateChanged", listener: (ev: MSManipulationEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLBodyElement: {
    prototype: HTMLBodyElement;
    new(): HTMLBodyElement;
}

interface HTMLButtonElement extends HTMLElement {
    autofocus: boolean;
    disabled: boolean;
    form: HTMLFormElement;
    formAction: string;
    formEnctype: string;
    formMethod: string;
    formNoValidate: string;
    formTarget: string;
    name: string;
    status: any;
    type: string;
    validationMessage: string;
    validity: ValidityState;
    value: string;
    willValidate: boolean;
    checkValidity(): boolean;
    createTextRange(): TextRange;
    setCustomValidity(error: string): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLButtonElement: {
    prototype: HTMLButtonElement;
    new(): HTMLButtonElement;
}

interface HTMLCanvasElement extends HTMLElement {
    height: number;
    width: number;
    getContext(contextId: string, ...args: any[]): CanvasRenderingContext2D;
    getContext(contextId: string, ...args: any[]): WebGLRenderingContext;
    msToBlob(): Blob;
    toDataURL(type?: string, ...args: any[]): string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLCanvasElement: {
    prototype: HTMLCanvasElement;
    new(): HTMLCanvasElement;
}

interface HTMLCollection {
    length: number;
    item(nameOrIndex?: any, optionalIndex?: any): Element;
    namedItem(name: string): Element;
    [index: number]: Element;
}

declare var HTMLCollection: {
    prototype: HTMLCollection;
    new(): HTMLCollection;
}

interface HTMLDDElement extends HTMLElement {
    noWrap: boolean;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLDDElement: {
    prototype: HTMLDDElement;
    new(): HTMLDDElement;
}

interface HTMLDListElement extends HTMLElement {
    compact: boolean;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLDListElement: {
    prototype: HTMLDListElement;
    new(): HTMLDListElement;
}

interface HTMLDTElement extends HTMLElement {
    noWrap: boolean;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLDTElement: {
    prototype: HTMLDTElement;
    new(): HTMLDTElement;
}

interface HTMLDataListElement extends HTMLElement {
    options: HTMLCollection;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLDataListElement: {
    prototype: HTMLDataListElement;
    new(): HTMLDataListElement;
}

interface HTMLDirectoryElement extends HTMLElement {
    compact: boolean;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLDirectoryElement: {
    prototype: HTMLDirectoryElement;
    new(): HTMLDirectoryElement;
}

interface HTMLDivElement extends HTMLElement {
    align: string;
    noWrap: boolean;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLDivElement: {
    prototype: HTMLDivElement;
    new(): HTMLDivElement;
}

interface HTMLDocument extends Document {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLDocument: {
    prototype: HTMLDocument;
    new(): HTMLDocument;
}

interface HTMLElement extends Element {
    accessKey: string;
    children: HTMLCollection;
    className: string;
    contentEditable: string;
    dataset: DOMStringMap;
    dir: string;
    draggable: boolean;
    hidden: boolean;
    hideFocus: boolean;
    id: string;
    innerHTML: string;
    innerText: string;
    isContentEditable: boolean;
    lang: string;
    offsetHeight: number;
    offsetLeft: number;
    offsetParent: Element;
    offsetTop: number;
    offsetWidth: number;
    onabort: (ev: Event) => any;
    onactivate: (ev: UIEvent) => any;
    onbeforeactivate: (ev: UIEvent) => any;
    onbeforecopy: (ev: DragEvent) => any;
    onbeforecut: (ev: DragEvent) => any;
    onbeforedeactivate: (ev: UIEvent) => any;
    onbeforepaste: (ev: DragEvent) => any;
    onblur: (ev: FocusEvent) => any;
    oncanplay: (ev: Event) => any;
    oncanplaythrough: (ev: Event) => any;
    onchange: (ev: Event) => any;
    onclick: (ev: MouseEvent) => any;
    oncontextmenu: (ev: PointerEvent) => any;
    oncopy: (ev: DragEvent) => any;
    oncuechange: (ev: Event) => any;
    oncut: (ev: DragEvent) => any;
    ondblclick: (ev: MouseEvent) => any;
    ondeactivate: (ev: UIEvent) => any;
    ondrag: (ev: DragEvent) => any;
    ondragend: (ev: DragEvent) => any;
    ondragenter: (ev: DragEvent) => any;
    ondragleave: (ev: DragEvent) => any;
    ondragover: (ev: DragEvent) => any;
    ondragstart: (ev: DragEvent) => any;
    ondrop: (ev: DragEvent) => any;
    ondurationchange: (ev: Event) => any;
    onemptied: (ev: Event) => any;
    onended: (ev: Event) => any;
    onerror: (ev: Event) => any;
    onfocus: (ev: FocusEvent) => any;
    oninput: (ev: Event) => any;
    onkeydown: (ev: KeyboardEvent) => any;
    onkeypress: (ev: KeyboardEvent) => any;
    onkeyup: (ev: KeyboardEvent) => any;
    onload: (ev: Event) => any;
    onloadeddata: (ev: Event) => any;
    onloadedmetadata: (ev: Event) => any;
    onloadstart: (ev: Event) => any;
    onmousedown: (ev: MouseEvent) => any;
    onmouseenter: (ev: MouseEvent) => any;
    onmouseleave: (ev: MouseEvent) => any;
    onmousemove: (ev: MouseEvent) => any;
    onmouseout: (ev: MouseEvent) => any;
    onmouseover: (ev: MouseEvent) => any;
    onmouseup: (ev: MouseEvent) => any;
    onmousewheel: (ev: MouseWheelEvent) => any;
    onmscontentzoom: (ev: UIEvent) => any;
    onmsmanipulationstatechanged: (ev: MSManipulationEvent) => any;
    onpaste: (ev: DragEvent) => any;
    onpause: (ev: Event) => any;
    onplay: (ev: Event) => any;
    onplaying: (ev: Event) => any;
    onprogress: (ev: ProgressEvent) => any;
    onratechange: (ev: Event) => any;
    onreset: (ev: Event) => any;
    onscroll: (ev: UIEvent) => any;
    onseeked: (ev: Event) => any;
    onseeking: (ev: Event) => any;
    onselect: (ev: UIEvent) => any;
    onselectstart: (ev: Event) => any;
    onstalled: (ev: Event) => any;
    onsubmit: (ev: Event) => any;
    onsuspend: (ev: Event) => any;
    ontimeupdate: (ev: Event) => any;
    onvolumechange: (ev: Event) => any;
    onwaiting: (ev: Event) => any;
    outerHTML: string;
    outerText: string;
    spellcheck: boolean;
    style: CSSStyleDeclaration;
    tabIndex: number;
    title: string;
    blur(): void;
    click(): void;
    contains(child: HTMLElement): boolean;
    dragDrop(): boolean;
    focus(): void;
    getElementsByClassName(classNames: string): NodeList;
    insertAdjacentElement(position: string, insertedElement: Element): Element;
    insertAdjacentHTML(where: string, html: string): void;
    insertAdjacentText(where: string, text: string): void;
    msGetInputContext(): MSInputMethodContext;
    scrollIntoView(top?: boolean): void;
    setActive(): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSContentZoom", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSManipulationStateChanged", listener: (ev: MSManipulationEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLElement: {
    prototype: HTMLElement;
    new(): HTMLElement;
}

interface HTMLEmbedElement extends HTMLElement, GetSVGDocument {
    height: string;
    hidden: any;
    msPlayToDisabled: boolean;
    msPlayToPreferredSourceUri: string;
    msPlayToPrimary: boolean;
    msPlayToSource: any;
    name: string;
    palette: string;
    pluginspage: string;
    readyState: string;
    src: string;
    units: string;
    width: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLEmbedElement: {
    prototype: HTMLEmbedElement;
    new(): HTMLEmbedElement;
}

interface HTMLFieldSetElement extends HTMLElement {
    align: string;
    disabled: boolean;
    form: HTMLFormElement;
    validationMessage: string;
    validity: ValidityState;
    willValidate: boolean;
    checkValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLFieldSetElement: {
    prototype: HTMLFieldSetElement;
    new(): HTMLFieldSetElement;
}

interface HTMLFontElement extends HTMLElement, DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {
    face: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLFontElement: {
    prototype: HTMLFontElement;
    new(): HTMLFontElement;
}

interface HTMLFormElement extends HTMLElement {
    acceptCharset: string;
    action: string;
    autocomplete: string;
    elements: HTMLCollection;
    encoding: string;
    enctype: string;
    length: number;
    method: string;
    name: string;
    noValidate: boolean;
    target: string;
    checkValidity(): boolean;
    item(name?: any, index?: any): any;
    namedItem(name: string): any;
    reset(): void;
    submit(): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
    [name: string]: any;
}

declare var HTMLFormElement: {
    prototype: HTMLFormElement;
    new(): HTMLFormElement;
}

interface HTMLFrameElement extends HTMLElement, GetSVGDocument {
    border: string;
    borderColor: any;
    contentDocument: Document;
    contentWindow: Window;
    frameBorder: string;
    frameSpacing: any;
    height: string | number;
    longDesc: string;
    marginHeight: string;
    marginWidth: string;
    name: string;
    noResize: boolean;
    onload: (ev: Event) => any;
    scrolling: string;
    security: any;
    src: string;
    width: string | number;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSContentZoom", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSManipulationStateChanged", listener: (ev: MSManipulationEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLFrameElement: {
    prototype: HTMLFrameElement;
    new(): HTMLFrameElement;
}

interface HTMLFrameSetElement extends HTMLElement {
    border: string;
    borderColor: any;
    cols: string;
    frameBorder: string;
    frameSpacing: any;
    name: string;
    onafterprint: (ev: Event) => any;
    onbeforeprint: (ev: Event) => any;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    onblur: (ev: FocusEvent) => any;
    onerror: (ev: Event) => any;
    onfocus: (ev: FocusEvent) => any;
    onhashchange: (ev: HashChangeEvent) => any;
    onload: (ev: Event) => any;
    onmessage: (ev: MessageEvent) => any;
    onoffline: (ev: Event) => any;
    ononline: (ev: Event) => any;
    onorientationchange: (ev: Event) => any;
    onpagehide: (ev: PageTransitionEvent) => any;
    onpageshow: (ev: PageTransitionEvent) => any;
    onresize: (ev: UIEvent) => any;
    onstorage: (ev: StorageEvent) => any;
    onunload: (ev: Event) => any;
    rows: string;
    addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "hashchange", listener: (ev: HashChangeEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "orientationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSContentZoom", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSManipulationStateChanged", listener: (ev: MSManipulationEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLFrameSetElement: {
    prototype: HTMLFrameSetElement;
    new(): HTMLFrameSetElement;
}

interface HTMLHRElement extends HTMLElement, DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {
    align: string;
    noShade: boolean;
    width: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLHRElement: {
    prototype: HTMLHRElement;
    new(): HTMLHRElement;
}

interface HTMLHeadElement extends HTMLElement {
    profile: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLHeadElement: {
    prototype: HTMLHeadElement;
    new(): HTMLHeadElement;
}

interface HTMLHeadingElement extends HTMLElement {
    align: string;
    clear: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLHeadingElement: {
    prototype: HTMLHeadingElement;
    new(): HTMLHeadingElement;
}

interface HTMLHtmlElement extends HTMLElement {
    version: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLHtmlElement: {
    prototype: HTMLHtmlElement;
    new(): HTMLHtmlElement;
}

interface HTMLIFrameElement extends HTMLElement, GetSVGDocument {
    align: string;
    allowFullscreen: boolean;
    border: string;
    contentDocument: Document;
    contentWindow: Window;
    frameBorder: string;
    frameSpacing: any;
    height: string;
    hspace: number;
    longDesc: string;
    marginHeight: string;
    marginWidth: string;
    name: string;
    noResize: boolean;
    onload: (ev: Event) => any;
    sandbox: DOMSettableTokenList;
    scrolling: string;
    security: any;
    src: string;
    vspace: number;
    width: string;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSContentZoom", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSManipulationStateChanged", listener: (ev: MSManipulationEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLIFrameElement: {
    prototype: HTMLIFrameElement;
    new(): HTMLIFrameElement;
}

interface HTMLImageElement extends HTMLElement {
    align: string;
    alt: string;
    border: string;
    complete: boolean;
    crossOrigin: string;
    currentSrc: string;
    height: number;
    hspace: number;
    isMap: boolean;
    longDesc: string;
    msPlayToDisabled: boolean;
    msPlayToPreferredSourceUri: string;
    msPlayToPrimary: boolean;
    msPlayToSource: any;
    name: string;
    naturalHeight: number;
    naturalWidth: number;
    src: string;
    srcset: string;
    useMap: string;
    vspace: number;
    width: number;
    x: number;
    y: number;
    create(): HTMLImageElement;
    msGetAsCastingSource(): any;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLImageElement: {
    prototype: HTMLImageElement;
    new(): HTMLImageElement;
    create(): HTMLImageElement;
}

interface HTMLInputElement extends HTMLElement {
    accept: string;
    align: string;
    alt: string;
    autocomplete: string;
    autofocus: boolean;
    border: string;
    checked: boolean;
    complete: boolean;
    defaultChecked: boolean;
    defaultValue: string;
    disabled: boolean;
    files: FileList;
    form: HTMLFormElement;
    formAction: string;
    formEnctype: string;
    formMethod: string;
    formNoValidate: string;
    formTarget: string;
    height: string;
    hspace: number;
    indeterminate: boolean;
    list: HTMLElement;
    max: string;
    maxLength: number;
    min: string;
    multiple: boolean;
    name: string;
    pattern: string;
    placeholder: string;
    readOnly: boolean;
    required: boolean;
    selectionEnd: number;
    selectionStart: number;
    size: number;
    src: string;
    status: boolean;
    step: string;
    type: string;
    useMap: string;
    validationMessage: string;
    validity: ValidityState;
    value: string;
    valueAsDate: any;
    valueAsNumber: number;
    vspace: number;
    width: string;
    willValidate: boolean;
    checkValidity(): boolean;
    createTextRange(): TextRange;
    select(): void;
    setCustomValidity(error: string): void;
    setSelectionRange(start: number, end: number): void;
    stepDown(n?: number): void;
    stepUp(n?: number): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLInputElement: {
    prototype: HTMLInputElement;
    new(): HTMLInputElement;
}

interface HTMLIsIndexElement extends HTMLElement {
    action: string;
    form: HTMLFormElement;
    prompt: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLIsIndexElement: {
    prototype: HTMLIsIndexElement;
    new(): HTMLIsIndexElement;
}

interface HTMLLIElement extends HTMLElement {
    type: string;
    value: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLLIElement: {
    prototype: HTMLLIElement;
    new(): HTMLLIElement;
}

interface HTMLLabelElement extends HTMLElement {
    form: HTMLFormElement;
    htmlFor: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLLabelElement: {
    prototype: HTMLLabelElement;
    new(): HTMLLabelElement;
}

interface HTMLLegendElement extends HTMLElement {
    align: string;
    form: HTMLFormElement;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLLegendElement: {
    prototype: HTMLLegendElement;
    new(): HTMLLegendElement;
}

interface HTMLLinkElement extends HTMLElement, LinkStyle {
    charset: string;
    disabled: boolean;
    href: string;
    hreflang: string;
    media: string;
    rel: string;
    rev: string;
    target: string;
    type: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLLinkElement: {
    prototype: HTMLLinkElement;
    new(): HTMLLinkElement;
}

interface HTMLMapElement extends HTMLElement {
    areas: HTMLAreasCollection;
    name: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLMapElement: {
    prototype: HTMLMapElement;
    new(): HTMLMapElement;
}

interface HTMLMarqueeElement extends HTMLElement {
    behavior: string;
    bgColor: any;
    direction: string;
    height: string;
    hspace: number;
    loop: number;
    onbounce: (ev: Event) => any;
    onfinish: (ev: Event) => any;
    onstart: (ev: Event) => any;
    scrollAmount: number;
    scrollDelay: number;
    trueSpeed: boolean;
    vspace: number;
    width: string;
    start(): void;
    stop(): void;
    addEventListener(type: "bounce", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "finish", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "start", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSContentZoom", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSManipulationStateChanged", listener: (ev: MSManipulationEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLMarqueeElement: {
    prototype: HTMLMarqueeElement;
    new(): HTMLMarqueeElement;
}

interface HTMLMediaElement extends HTMLElement {
    audioTracks: AudioTrackList;
    autoplay: boolean;
    buffered: TimeRanges;
    controls: boolean;
    currentSrc: string;
    currentTime: number;
    defaultMuted: boolean;
    defaultPlaybackRate: number;
    duration: number;
    ended: boolean;
    error: MediaError;
    loop: boolean;
    msAudioCategory: string;
    msAudioDeviceType: string;
    msGraphicsTrustStatus: MSGraphicsTrust;
    msKeys: MSMediaKeys;
    msPlayToDisabled: boolean;
    msPlayToPreferredSourceUri: string;
    msPlayToPrimary: boolean;
    msPlayToSource: any;
    msRealTime: boolean;
    muted: boolean;
    networkState: number;
    onmsneedkey: (ev: MSMediaKeyNeededEvent) => any;
    paused: boolean;
    playbackRate: number;
    played: TimeRanges;
    preload: string;
    readyState: any;
    seekable: TimeRanges;
    seeking: boolean;
    src: string;
    textTracks: TextTrackList;
    videoTracks: VideoTrackList;
    volume: number;
    addTextTrack(kind: string, label?: string, language?: string): TextTrack;
    canPlayType(type: string): string;
    load(): void;
    msClearEffects(): void;
    msGetAsCastingSource(): any;
    msInsertAudioEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;
    msSetMediaKeys(mediaKeys: MSMediaKeys): void;
    msSetMediaProtectionManager(mediaProtectionManager?: any): void;
    pause(): void;
    play(): void;
    HAVE_CURRENT_DATA: number;
    HAVE_ENOUGH_DATA: number;
    HAVE_FUTURE_DATA: number;
    HAVE_METADATA: number;
    HAVE_NOTHING: number;
    NETWORK_EMPTY: number;
    NETWORK_IDLE: number;
    NETWORK_LOADING: number;
    NETWORK_NO_SOURCE: number;
    addEventListener(type: "msneedkey", listener: (ev: MSMediaKeyNeededEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSContentZoom", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSManipulationStateChanged", listener: (ev: MSManipulationEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLMediaElement: {
    prototype: HTMLMediaElement;
    new(): HTMLMediaElement;
    HAVE_CURRENT_DATA: number;
    HAVE_ENOUGH_DATA: number;
    HAVE_FUTURE_DATA: number;
    HAVE_METADATA: number;
    HAVE_NOTHING: number;
    NETWORK_EMPTY: number;
    NETWORK_IDLE: number;
    NETWORK_LOADING: number;
    NETWORK_NO_SOURCE: number;
}

interface HTMLMenuElement extends HTMLElement {
    compact: boolean;
    type: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLMenuElement: {
    prototype: HTMLMenuElement;
    new(): HTMLMenuElement;
}

interface HTMLMetaElement extends HTMLElement {
    charset: string;
    content: string;
    httpEquiv: string;
    name: string;
    scheme: string;
    url: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLMetaElement: {
    prototype: HTMLMetaElement;
    new(): HTMLMetaElement;
}

interface HTMLModElement extends HTMLElement {
    cite: string;
    dateTime: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLModElement: {
    prototype: HTMLModElement;
    new(): HTMLModElement;
}

interface HTMLNextIdElement extends HTMLElement {
    n: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLNextIdElement: {
    prototype: HTMLNextIdElement;
    new(): HTMLNextIdElement;
}

interface HTMLOListElement extends HTMLElement {
    compact: boolean;
    start: number;
    type: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLOListElement: {
    prototype: HTMLOListElement;
    new(): HTMLOListElement;
}

interface HTMLObjectElement extends HTMLElement, GetSVGDocument {
    BaseHref: string;
    align: string;
    alt: string;
    altHtml: string;
    archive: string;
    border: string;
    code: string;
    codeBase: string;
    codeType: string;
    contentDocument: Document;
    data: string;
    declare: boolean;
    form: HTMLFormElement;
    height: string;
    hspace: number;
    msPlayToDisabled: boolean;
    msPlayToPreferredSourceUri: string;
    msPlayToPrimary: boolean;
    msPlayToSource: any;
    name: string;
    object: any;
    readyState: number;
    standby: string;
    type: string;
    useMap: string;
    validationMessage: string;
    validity: ValidityState;
    vspace: number;
    width: string;
    willValidate: boolean;
    checkValidity(): boolean;
    setCustomValidity(error: string): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLObjectElement: {
    prototype: HTMLObjectElement;
    new(): HTMLObjectElement;
}

interface HTMLOptGroupElement extends HTMLElement {
    defaultSelected: boolean;
    disabled: boolean;
    form: HTMLFormElement;
    index: number;
    label: string;
    selected: boolean;
    text: string;
    value: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLOptGroupElement: {
    prototype: HTMLOptGroupElement;
    new(): HTMLOptGroupElement;
}

interface HTMLOptionElement extends HTMLElement {
    defaultSelected: boolean;
    disabled: boolean;
    form: HTMLFormElement;
    index: number;
    label: string;
    selected: boolean;
    text: string;
    value: string;
    create(): HTMLOptionElement;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLOptionElement: {
    prototype: HTMLOptionElement;
    new(): HTMLOptionElement;
    create(): HTMLOptionElement;
}

interface HTMLParagraphElement extends HTMLElement {
    align: string;
    clear: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLParagraphElement: {
    prototype: HTMLParagraphElement;
    new(): HTMLParagraphElement;
}

interface HTMLParamElement extends HTMLElement {
    name: string;
    type: string;
    value: string;
    valueType: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLParamElement: {
    prototype: HTMLParamElement;
    new(): HTMLParamElement;
}

interface HTMLPhraseElement extends HTMLElement {
    cite: string;
    dateTime: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLPhraseElement: {
    prototype: HTMLPhraseElement;
    new(): HTMLPhraseElement;
}

interface HTMLPreElement extends HTMLElement {
    cite: string;
    clear: string;
    width: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLPreElement: {
    prototype: HTMLPreElement;
    new(): HTMLPreElement;
}

interface HTMLProgressElement extends HTMLElement {
    form: HTMLFormElement;
    max: number;
    position: number;
    value: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLProgressElement: {
    prototype: HTMLProgressElement;
    new(): HTMLProgressElement;
}

interface HTMLQuoteElement extends HTMLElement {
    cite: string;
    dateTime: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLQuoteElement: {
    prototype: HTMLQuoteElement;
    new(): HTMLQuoteElement;
}

interface HTMLScriptElement extends HTMLElement {
    async: boolean;
    charset: string;
    defer: boolean;
    event: string;
    htmlFor: string;
    src: string;
    text: string;
    type: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLScriptElement: {
    prototype: HTMLScriptElement;
    new(): HTMLScriptElement;
}

interface HTMLSelectElement extends HTMLElement {
    autofocus: boolean;
    disabled: boolean;
    form: HTMLFormElement;
    length: number;
    multiple: boolean;
    name: string;
    options: HTMLSelectElement;
    required: boolean;
    selectedIndex: number;
    size: number;
    type: string;
    validationMessage: string;
    validity: ValidityState;
    value: string;
    willValidate: boolean;
    add(element: HTMLElement, before?: HTMLElement): void;
    add(element: HTMLElement, before?: number): void;
    checkValidity(): boolean;
    item(name?: any, index?: any): any;
    namedItem(name: string): any;
    remove(index?: number): void;
    setCustomValidity(error: string): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
    [name: string]: any;
}

declare var HTMLSelectElement: {
    prototype: HTMLSelectElement;
    new(): HTMLSelectElement;
}

interface HTMLSourceElement extends HTMLElement {
    media: string;
    msKeySystem: string;
    src: string;
    type: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLSourceElement: {
    prototype: HTMLSourceElement;
    new(): HTMLSourceElement;
}

interface HTMLSpanElement extends HTMLElement {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLSpanElement: {
    prototype: HTMLSpanElement;
    new(): HTMLSpanElement;
}

interface HTMLStyleElement extends HTMLElement, LinkStyle {
    media: string;
    type: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLStyleElement: {
    prototype: HTMLStyleElement;
    new(): HTMLStyleElement;
}

interface HTMLTableCaptionElement extends HTMLElement {
    align: string;
    vAlign: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLTableCaptionElement: {
    prototype: HTMLTableCaptionElement;
    new(): HTMLTableCaptionElement;
}

interface HTMLTableCellElement extends HTMLElement, HTMLTableAlignment {
    abbr: string;
    align: string;
    axis: string;
    bgColor: any;
    cellIndex: number;
    colSpan: number;
    headers: string;
    height: any;
    noWrap: boolean;
    rowSpan: number;
    scope: string;
    width: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLTableCellElement: {
    prototype: HTMLTableCellElement;
    new(): HTMLTableCellElement;
}

interface HTMLTableColElement extends HTMLElement, HTMLTableAlignment {
    align: string;
    span: number;
    width: any;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLTableColElement: {
    prototype: HTMLTableColElement;
    new(): HTMLTableColElement;
}

interface HTMLTableDataCellElement extends HTMLTableCellElement {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLTableDataCellElement: {
    prototype: HTMLTableDataCellElement;
    new(): HTMLTableDataCellElement;
}

interface HTMLTableElement extends HTMLElement {
    align: string;
    bgColor: any;
    border: string;
    borderColor: any;
    caption: HTMLTableCaptionElement;
    cellPadding: string;
    cellSpacing: string;
    cols: number;
    frame: string;
    height: any;
    rows: HTMLCollection;
    rules: string;
    summary: string;
    tBodies: HTMLCollection;
    tFoot: HTMLTableSectionElement;
    tHead: HTMLTableSectionElement;
    width: string;
    createCaption(): HTMLElement;
    createTBody(): HTMLElement;
    createTFoot(): HTMLElement;
    createTHead(): HTMLElement;
    deleteCaption(): void;
    deleteRow(index?: number): void;
    deleteTFoot(): void;
    deleteTHead(): void;
    insertRow(index?: number): HTMLElement;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLTableElement: {
    prototype: HTMLTableElement;
    new(): HTMLTableElement;
}

interface HTMLTableHeaderCellElement extends HTMLTableCellElement {
    scope: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLTableHeaderCellElement: {
    prototype: HTMLTableHeaderCellElement;
    new(): HTMLTableHeaderCellElement;
}

interface HTMLTableRowElement extends HTMLElement, HTMLTableAlignment {
    align: string;
    bgColor: any;
    cells: HTMLCollection;
    height: any;
    rowIndex: number;
    sectionRowIndex: number;
    deleteCell(index?: number): void;
    insertCell(index?: number): HTMLElement;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLTableRowElement: {
    prototype: HTMLTableRowElement;
    new(): HTMLTableRowElement;
}

interface HTMLTableSectionElement extends HTMLElement, HTMLTableAlignment {
    align: string;
    rows: HTMLCollection;
    deleteRow(index?: number): void;
    insertRow(index?: number): HTMLElement;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLTableSectionElement: {
    prototype: HTMLTableSectionElement;
    new(): HTMLTableSectionElement;
}

interface HTMLTextAreaElement extends HTMLElement {
    autofocus: boolean;
    cols: number;
    defaultValue: string;
    disabled: boolean;
    form: HTMLFormElement;
    maxLength: number;
    name: string;
    placeholder: string;
    readOnly: boolean;
    required: boolean;
    rows: number;
    selectionEnd: number;
    selectionStart: number;
    status: any;
    type: string;
    validationMessage: string;
    validity: ValidityState;
    value: string;
    willValidate: boolean;
    wrap: string;
    checkValidity(): boolean;
    createTextRange(): TextRange;
    select(): void;
    setCustomValidity(error: string): void;
    setSelectionRange(start: number, end: number): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLTextAreaElement: {
    prototype: HTMLTextAreaElement;
    new(): HTMLTextAreaElement;
}

interface HTMLTitleElement extends HTMLElement {
    text: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLTitleElement: {
    prototype: HTMLTitleElement;
    new(): HTMLTitleElement;
}

interface HTMLTrackElement extends HTMLElement {
    default: boolean;
    kind: string;
    label: string;
    readyState: number;
    src: string;
    srclang: string;
    track: TextTrack;
    ERROR: number;
    LOADED: number;
    LOADING: number;
    NONE: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLTrackElement: {
    prototype: HTMLTrackElement;
    new(): HTMLTrackElement;
    ERROR: number;
    LOADED: number;
    LOADING: number;
    NONE: number;
}

interface HTMLUListElement extends HTMLElement {
    compact: boolean;
    type: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLUListElement: {
    prototype: HTMLUListElement;
    new(): HTMLUListElement;
}

interface HTMLUnknownElement extends HTMLElement {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLUnknownElement: {
    prototype: HTMLUnknownElement;
    new(): HTMLUnknownElement;
}

interface HTMLVideoElement extends HTMLMediaElement {
    height: number;
    msHorizontalMirror: boolean;
    msIsLayoutOptimalForPlayback: boolean;
    msIsStereo3D: boolean;
    msStereo3DPackingMode: string;
    msStereo3DRenderMode: string;
    msZoom: boolean;
    onMSVideoFormatChanged: (ev: Event) => any;
    onMSVideoFrameStepCompleted: (ev: Event) => any;
    onMSVideoOptimalLayoutChanged: (ev: Event) => any;
    poster: string;
    videoHeight: number;
    videoWidth: number;
    webkitDisplayingFullscreen: boolean;
    webkitSupportsFullscreen: boolean;
    width: number;
    getVideoPlaybackQuality(): VideoPlaybackQuality;
    msFrameStep(forward: boolean): void;
    msInsertVideoEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;
    msSetVideoRectangle(left: number, top: number, right: number, bottom: number): void;
    webkitEnterFullScreen(): void;
    webkitEnterFullscreen(): void;
    webkitExitFullScreen(): void;
    webkitExitFullscreen(): void;
    addEventListener(type: "MSVideoFormatChanged", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "MSVideoFrameStepCompleted", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "MSVideoOptimalLayoutChanged", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "msneedkey", listener: (ev: MSMediaKeyNeededEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSContentZoom", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSManipulationStateChanged", listener: (ev: MSManipulationEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var HTMLVideoElement: {
    prototype: HTMLVideoElement;
    new(): HTMLVideoElement;
}

interface HashChangeEvent extends Event {
    newURL: string;
    oldURL: string;
}

declare var HashChangeEvent: {
    prototype: HashChangeEvent;
    new(type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent;
}

interface History {
    length: number;
    state: any;
    back(distance?: any): void;
    forward(distance?: any): void;
    go(delta?: any): void;
    pushState(statedata: any, title?: string, url?: string): void;
    replaceState(statedata: any, title?: string, url?: string): void;
}

declare var History: {
    prototype: History;
    new(): History;
}

interface IDBCursor {
    direction: string;
    key: any;
    primaryKey: any;
    source: any;
    advance(count: number): void;
    continue(key?: any): void;
    delete(): IDBRequest;
    update(value: any): IDBRequest;
    NEXT: string;
    NEXT_NO_DUPLICATE: string;
    PREV: string;
    PREV_NO_DUPLICATE: string;
}

declare var IDBCursor: {
    prototype: IDBCursor;
    new(): IDBCursor;
    NEXT: string;
    NEXT_NO_DUPLICATE: string;
    PREV: string;
    PREV_NO_DUPLICATE: string;
}

interface IDBCursorWithValue extends IDBCursor {
    value: any;
}

declare var IDBCursorWithValue: {
    prototype: IDBCursorWithValue;
    new(): IDBCursorWithValue;
}

interface IDBDatabase extends EventTarget {
    name: string;
    objectStoreNames: DOMStringList;
    onabort: (ev: Event) => any;
    onerror: (ev: Event) => any;
    version: string;
    close(): void;
    createObjectStore(name: string, optionalParameters?: any): IDBObjectStore;
    deleteObjectStore(name: string): void;
    transaction(storeNames: any, mode?: string): IDBTransaction;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var IDBDatabase: {
    prototype: IDBDatabase;
    new(): IDBDatabase;
}

interface IDBFactory {
    cmp(first: any, second: any): number;
    deleteDatabase(name: string): IDBOpenDBRequest;
    open(name: string, version?: number): IDBOpenDBRequest;
}

declare var IDBFactory: {
    prototype: IDBFactory;
    new(): IDBFactory;
}

interface IDBIndex {
    keyPath: string;
    name: string;
    objectStore: IDBObjectStore;
    unique: boolean;
    count(key?: any): IDBRequest;
    get(key: any): IDBRequest;
    getKey(key: any): IDBRequest;
    openCursor(range?: IDBKeyRange, direction?: string): IDBRequest;
    openKeyCursor(range?: IDBKeyRange, direction?: string): IDBRequest;
}

declare var IDBIndex: {
    prototype: IDBIndex;
    new(): IDBIndex;
}

interface IDBKeyRange {
    lower: any;
    lowerOpen: boolean;
    upper: any;
    upperOpen: boolean;
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    lowerBound(bound: any, open?: boolean): IDBKeyRange;
    only(value: any): IDBKeyRange;
    upperBound(bound: any, open?: boolean): IDBKeyRange;
}

declare var IDBKeyRange: {
    prototype: IDBKeyRange;
    new(): IDBKeyRange;
    bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
    lowerBound(bound: any, open?: boolean): IDBKeyRange;
    only(value: any): IDBKeyRange;
    upperBound(bound: any, open?: boolean): IDBKeyRange;
}

interface IDBObjectStore {
    indexNames: DOMStringList;
    keyPath: string;
    name: string;
    transaction: IDBTransaction;
    add(value: any, key?: any): IDBRequest;
    clear(): IDBRequest;
    count(key?: any): IDBRequest;
    createIndex(name: string, keyPath: string, optionalParameters?: any): IDBIndex;
    delete(key: any): IDBRequest;
    deleteIndex(indexName: string): void;
    get(key: any): IDBRequest;
    index(name: string): IDBIndex;
    openCursor(range?: any, direction?: string): IDBRequest;
    put(value: any, key?: any): IDBRequest;
}

declare var IDBObjectStore: {
    prototype: IDBObjectStore;
    new(): IDBObjectStore;
}

interface IDBOpenDBRequest extends IDBRequest {
    onblocked: (ev: Event) => any;
    onupgradeneeded: (ev: IDBVersionChangeEvent) => any;
    addEventListener(type: "blocked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "upgradeneeded", listener: (ev: IDBVersionChangeEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "success", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var IDBOpenDBRequest: {
    prototype: IDBOpenDBRequest;
    new(): IDBOpenDBRequest;
}

interface IDBRequest extends EventTarget {
    error: DOMError;
    onerror: (ev: Event) => any;
    onsuccess: (ev: Event) => any;
    readyState: string;
    result: any;
    source: any;
    transaction: IDBTransaction;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "success", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var IDBRequest: {
    prototype: IDBRequest;
    new(): IDBRequest;
}

interface IDBTransaction extends EventTarget {
    db: IDBDatabase;
    error: DOMError;
    mode: string;
    onabort: (ev: Event) => any;
    oncomplete: (ev: Event) => any;
    onerror: (ev: Event) => any;
    abort(): void;
    objectStore(name: string): IDBObjectStore;
    READ_ONLY: string;
    READ_WRITE: string;
    VERSION_CHANGE: string;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var IDBTransaction: {
    prototype: IDBTransaction;
    new(): IDBTransaction;
    READ_ONLY: string;
    READ_WRITE: string;
    VERSION_CHANGE: string;
}

interface IDBVersionChangeEvent extends Event {
    newVersion: number;
    oldVersion: number;
}

declare var IDBVersionChangeEvent: {
    prototype: IDBVersionChangeEvent;
    new(): IDBVersionChangeEvent;
}

interface ImageData {
    data: number[];
    height: number;
    width: number;
}

declare var ImageData: {
    prototype: ImageData;
    new(): ImageData;
}

interface KeyboardEvent extends UIEvent {
    altKey: boolean;
    char: string;
    charCode: number;
    ctrlKey: boolean;
    key: string;
    keyCode: number;
    locale: string;
    location: number;
    metaKey: boolean;
    repeat: boolean;
    shiftKey: boolean;
    which: number;
    getModifierState(keyArg: string): boolean;
    initKeyboardEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, keyArg: string, locationArg: number, modifiersListArg: string, repeat: boolean, locale: string): void;
    DOM_KEY_LOCATION_JOYSTICK: number;
    DOM_KEY_LOCATION_LEFT: number;
    DOM_KEY_LOCATION_MOBILE: number;
    DOM_KEY_LOCATION_NUMPAD: number;
    DOM_KEY_LOCATION_RIGHT: number;
    DOM_KEY_LOCATION_STANDARD: number;
}

declare var KeyboardEvent: {
    prototype: KeyboardEvent;
    new(typeArg: string, eventInitDict?: KeyboardEventInit): KeyboardEvent;
    DOM_KEY_LOCATION_JOYSTICK: number;
    DOM_KEY_LOCATION_LEFT: number;
    DOM_KEY_LOCATION_MOBILE: number;
    DOM_KEY_LOCATION_NUMPAD: number;
    DOM_KEY_LOCATION_RIGHT: number;
    DOM_KEY_LOCATION_STANDARD: number;
}

interface Location {
    hash: string;
    host: string;
    hostname: string;
    href: string;
    origin: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    assign(url: string): void;
    reload(forcedReload?: boolean): void;
    replace(url: string): void;
    toString(): string;
}

declare var Location: {
    prototype: Location;
    new(): Location;
}

interface LongRunningScriptDetectedEvent extends Event {
    executionTime: number;
    stopPageScriptExecution: boolean;
}

declare var LongRunningScriptDetectedEvent: {
    prototype: LongRunningScriptDetectedEvent;
    new(): LongRunningScriptDetectedEvent;
}

interface MSApp {
    clearTemporaryWebDataAsync(): MSAppAsyncOperation;
    createBlobFromRandomAccessStream(type: string, seeker: any): Blob;
    createDataPackage(object: any): any;
    createDataPackageFromSelection(): any;
    createFileFromStorageFile(storageFile: any): File;
    createStreamFromInputStream(type: string, inputStream: any): MSStream;
    execAsyncAtPriority(asynchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[]): void;
    execAtPriority(synchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[]): any;
    getCurrentPriority(): string;
    getHtmlPrintDocumentSourceAsync(htmlDoc: any): any;
    getViewId(view: any): any;
    isTaskScheduledAtPriorityOrHigher(priority: string): boolean;
    pageHandlesAllApplicationActivations(enabled: boolean): void;
    suppressSubdownloadCredentialPrompts(suppress: boolean): void;
    terminateApp(exceptionObject: any): void;
    CURRENT: string;
    HIGH: string;
    IDLE: string;
    NORMAL: string;
}
declare var MSApp: MSApp;

interface MSAppAsyncOperation extends EventTarget {
    error: DOMError;
    oncomplete: (ev: Event) => any;
    onerror: (ev: Event) => any;
    readyState: number;
    result: any;
    start(): void;
    COMPLETED: number;
    ERROR: number;
    STARTED: number;
    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var MSAppAsyncOperation: {
    prototype: MSAppAsyncOperation;
    new(): MSAppAsyncOperation;
    COMPLETED: number;
    ERROR: number;
    STARTED: number;
}

interface MSBlobBuilder {
    append(data: any, endings?: string): void;
    getBlob(contentType?: string): Blob;
}

declare var MSBlobBuilder: {
    prototype: MSBlobBuilder;
    new(): MSBlobBuilder;
}

interface MSCSSMatrix {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    m41: number;
    m42: number;
    m43: number;
    m44: number;
    inverse(): MSCSSMatrix;
    multiply(secondMatrix: MSCSSMatrix): MSCSSMatrix;
    rotate(angleX: number, angleY?: number, angleZ?: number): MSCSSMatrix;
    rotateAxisAngle(x: number, y: number, z: number, angle: number): MSCSSMatrix;
    scale(scaleX: number, scaleY?: number, scaleZ?: number): MSCSSMatrix;
    setMatrixValue(value: string): void;
    skewX(angle: number): MSCSSMatrix;
    skewY(angle: number): MSCSSMatrix;
    toString(): string;
    translate(x: number, y: number, z?: number): MSCSSMatrix;
}

declare var MSCSSMatrix: {
    prototype: MSCSSMatrix;
    new(text?: string): MSCSSMatrix;
}

interface MSGesture {
    target: Element;
    addPointer(pointerId: number): void;
    stop(): void;
}

declare var MSGesture: {
    prototype: MSGesture;
    new(): MSGesture;
}

interface MSGestureEvent extends UIEvent {
    clientX: number;
    clientY: number;
    expansion: number;
    gestureObject: any;
    hwTimestamp: number;
    offsetX: number;
    offsetY: number;
    rotation: number;
    scale: number;
    screenX: number;
    screenY: number;
    translationX: number;
    translationY: number;
    velocityAngular: number;
    velocityExpansion: number;
    velocityX: number;
    velocityY: number;
    initGestureEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, offsetXArg: number, offsetYArg: number, translationXArg: number, translationYArg: number, scaleArg: number, expansionArg: number, rotationArg: number, velocityXArg: number, velocityYArg: number, velocityExpansionArg: number, velocityAngularArg: number, hwTimestampArg: number): void;
    MSGESTURE_FLAG_BEGIN: number;
    MSGESTURE_FLAG_CANCEL: number;
    MSGESTURE_FLAG_END: number;
    MSGESTURE_FLAG_INERTIA: number;
    MSGESTURE_FLAG_NONE: number;
}

declare var MSGestureEvent: {
    prototype: MSGestureEvent;
    new(): MSGestureEvent;
    MSGESTURE_FLAG_BEGIN: number;
    MSGESTURE_FLAG_CANCEL: number;
    MSGESTURE_FLAG_END: number;
    MSGESTURE_FLAG_INERTIA: number;
    MSGESTURE_FLAG_NONE: number;
}

interface MSGraphicsTrust {
    constrictionActive: boolean;
    status: string;
}

declare var MSGraphicsTrust: {
    prototype: MSGraphicsTrust;
    new(): MSGraphicsTrust;
}

interface MSHTMLWebViewElement extends HTMLElement {
    canGoBack: boolean;
    canGoForward: boolean;
    containsFullScreenElement: boolean;
    documentTitle: string;
    height: number;
    settings: MSWebViewSettings;
    src: string;
    width: number;
    addWebAllowedObject(name: string, applicationObject: any): void;
    buildLocalStreamUri(contentIdentifier: string, relativePath: string): string;
    capturePreviewToBlobAsync(): MSWebViewAsyncOperation;
    captureSelectedContentToDataPackageAsync(): MSWebViewAsyncOperation;
    getDeferredPermissionRequestById(id: number): DeferredPermissionRequest;
    getDeferredPermissionRequests(): DeferredPermissionRequest[];
    goBack(): void;
    goForward(): void;
    invokeScriptAsync(scriptName: string, ...args: any[]): MSWebViewAsyncOperation;
    navigate(uri: string): void;
    navigateToLocalStreamUri(source: string, streamResolver: any): void;
    navigateToString(contents: string): void;
    navigateWithHttpRequestMessage(requestMessage: any): void;
    refresh(): void;
    stop(): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var MSHTMLWebViewElement: {
    prototype: MSHTMLWebViewElement;
    new(): MSHTMLWebViewElement;
}

interface MSHeaderFooter {
    URL: string;
    dateLong: string;
    dateShort: string;
    font: string;
    htmlFoot: string;
    htmlHead: string;
    page: number;
    pageTotal: number;
    textFoot: string;
    textHead: string;
    timeLong: string;
    timeShort: string;
    title: string;
}

declare var MSHeaderFooter: {
    prototype: MSHeaderFooter;
    new(): MSHeaderFooter;
}

interface MSInputMethodContext extends EventTarget {
    compositionEndOffset: number;
    compositionStartOffset: number;
    oncandidatewindowhide: (ev: Event) => any;
    oncandidatewindowshow: (ev: Event) => any;
    oncandidatewindowupdate: (ev: Event) => any;
    target: HTMLElement;
    getCandidateWindowClientRect(): ClientRect;
    getCompositionAlternatives(): string[];
    hasComposition(): boolean;
    isCandidateWindowVisible(): boolean;
    addEventListener(type: "MSCandidateWindowHide", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "MSCandidateWindowShow", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "MSCandidateWindowUpdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var MSInputMethodContext: {
    prototype: MSInputMethodContext;
    new(): MSInputMethodContext;
}

interface MSManipulationEvent extends UIEvent {
    currentState: number;
    inertiaDestinationX: number;
    inertiaDestinationY: number;
    lastState: number;
    initMSManipulationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, lastState: number, currentState: number): void;
    MS_MANIPULATION_STATE_ACTIVE: number;
    MS_MANIPULATION_STATE_CANCELLED: number;
    MS_MANIPULATION_STATE_COMMITTED: number;
    MS_MANIPULATION_STATE_DRAGGING: number;
    MS_MANIPULATION_STATE_INERTIA: number;
    MS_MANIPULATION_STATE_PRESELECT: number;
    MS_MANIPULATION_STATE_SELECTING: number;
    MS_MANIPULATION_STATE_STOPPED: number;
}

declare var MSManipulationEvent: {
    prototype: MSManipulationEvent;
    new(): MSManipulationEvent;
    MS_MANIPULATION_STATE_ACTIVE: number;
    MS_MANIPULATION_STATE_CANCELLED: number;
    MS_MANIPULATION_STATE_COMMITTED: number;
    MS_MANIPULATION_STATE_DRAGGING: number;
    MS_MANIPULATION_STATE_INERTIA: number;
    MS_MANIPULATION_STATE_PRESELECT: number;
    MS_MANIPULATION_STATE_SELECTING: number;
    MS_MANIPULATION_STATE_STOPPED: number;
}

interface MSMediaKeyError {
    code: number;
    systemCode: number;
    MS_MEDIA_KEYERR_CLIENT: number;
    MS_MEDIA_KEYERR_DOMAIN: number;
    MS_MEDIA_KEYERR_HARDWARECHANGE: number;
    MS_MEDIA_KEYERR_OUTPUT: number;
    MS_MEDIA_KEYERR_SERVICE: number;
    MS_MEDIA_KEYERR_UNKNOWN: number;
}

declare var MSMediaKeyError: {
    prototype: MSMediaKeyError;
    new(): MSMediaKeyError;
    MS_MEDIA_KEYERR_CLIENT: number;
    MS_MEDIA_KEYERR_DOMAIN: number;
    MS_MEDIA_KEYERR_HARDWARECHANGE: number;
    MS_MEDIA_KEYERR_OUTPUT: number;
    MS_MEDIA_KEYERR_SERVICE: number;
    MS_MEDIA_KEYERR_UNKNOWN: number;
}

interface MSMediaKeyMessageEvent extends Event {
    destinationURL: string;
    message: any;
}

declare var MSMediaKeyMessageEvent: {
    prototype: MSMediaKeyMessageEvent;
    new(): MSMediaKeyMessageEvent;
}

interface MSMediaKeyNeededEvent extends Event {
    initData: any;
}

declare var MSMediaKeyNeededEvent: {
    prototype: MSMediaKeyNeededEvent;
    new(): MSMediaKeyNeededEvent;
}

interface MSMediaKeySession extends EventTarget {
    error: MSMediaKeyError;
    keySystem: string;
    sessionId: string;
    close(): void;
    update(key: any): void;
}

declare var MSMediaKeySession: {
    prototype: MSMediaKeySession;
    new(): MSMediaKeySession;
}

interface MSMediaKeys {
    keySystem: string;
    createSession(type: string, initData: any, cdmData?: any): MSMediaKeySession;
    isTypeSupported(keySystem: string, type?: string): boolean;
}

declare var MSMediaKeys: {
    prototype: MSMediaKeys;
    new(keySystem: string): MSMediaKeys;
    isTypeSupported(keySystem: string, type?: string): boolean;
}

interface MSMimeTypesCollection {
    length: number;
}

declare var MSMimeTypesCollection: {
    prototype: MSMimeTypesCollection;
    new(): MSMimeTypesCollection;
}

interface MSPluginsCollection {
    length: number;
    refresh(reload?: boolean): void;
}

declare var MSPluginsCollection: {
    prototype: MSPluginsCollection;
    new(): MSPluginsCollection;
}

interface MSPointerEvent extends MouseEvent {
    currentPoint: any;
    height: number;
    hwTimestamp: number;
    intermediatePoints: any;
    isPrimary: boolean;
    pointerId: number;
    pointerType: any;
    pressure: number;
    rotation: number;
    tiltX: number;
    tiltY: number;
    width: number;
    getCurrentPoint(element: Element): void;
    getIntermediatePoints(element: Element): void;
    initPointerEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean): void;
}

declare var MSPointerEvent: {
    prototype: MSPointerEvent;
    new(typeArg: string, eventInitDict?: PointerEventInit): MSPointerEvent;
}

interface MSPrintManagerTemplatePrinter extends MSTemplatePrinter, EventTarget {
    percentScale: number;
    showHeaderFooter: boolean;
    shrinkToFit: boolean;
    drawPreviewPage(element: HTMLElement, pageNumber: number): void;
    endPrint(): void;
    getPrintTaskOptionValue(key: string): any;
    invalidatePreview(): void;
    setPageCount(pageCount: number): void;
    startPrint(): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var MSPrintManagerTemplatePrinter: {
    prototype: MSPrintManagerTemplatePrinter;
    new(): MSPrintManagerTemplatePrinter;
}

interface MSRangeCollection {
    length: number;
    item(index: number): Range;
    [index: number]: Range;
}

declare var MSRangeCollection: {
    prototype: MSRangeCollection;
    new(): MSRangeCollection;
}

interface MSSiteModeEvent extends Event {
    actionURL: string;
    buttonID: number;
}

declare var MSSiteModeEvent: {
    prototype: MSSiteModeEvent;
    new(): MSSiteModeEvent;
}

interface MSStream {
    type: string;
    msClose(): void;
    msDetachStream(): any;
}

declare var MSStream: {
    prototype: MSStream;
    new(): MSStream;
}

interface MSStreamReader extends EventTarget, MSBaseReader {
    error: DOMError;
    readAsArrayBuffer(stream: MSStream, size?: number): void;
    readAsBinaryString(stream: MSStream, size?: number): void;
    readAsBlob(stream: MSStream, size?: number): void;
    readAsDataURL(stream: MSStream, size?: number): void;
    readAsText(stream: MSStream, encoding?: string, size?: number): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var MSStreamReader: {
    prototype: MSStreamReader;
    new(): MSStreamReader;
}

interface MSTemplatePrinter {
    collate: boolean;
    copies: number;
    currentPage: boolean;
    currentPageAvail: boolean;
    duplex: boolean;
    footer: string;
    frameActive: boolean;
    frameActiveEnabled: boolean;
    frameAsShown: boolean;
    framesetDocument: boolean;
    header: string;
    headerFooterFont: string;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
    marginTop: number;
    orientation: string;
    pageFrom: number;
    pageHeight: number;
    pageTo: number;
    pageWidth: number;
    selectedPages: boolean;
    selection: boolean;
    selectionEnabled: boolean;
    unprintableBottom: number;
    unprintableLeft: number;
    unprintableRight: number;
    unprintableTop: number;
    usePrinterCopyCollate: boolean;
    createHeaderFooter(): MSHeaderFooter;
    deviceSupports(property: string): any;
    ensurePrintDialogDefaults(): boolean;
    getPageMarginBottom(pageRule: CSSPageRule, pageWidth: number, pageHeight: number): any;
    getPageMarginBottomImportant(pageRule: CSSPageRule): boolean;
    getPageMarginLeft(pageRule: CSSPageRule, pageWidth: number, pageHeight: number): any;
    getPageMarginLeftImportant(pageRule: CSSPageRule): boolean;
    getPageMarginRight(pageRule: CSSPageRule, pageWidth: number, pageHeight: number): any;
    getPageMarginRightImportant(pageRule: CSSPageRule): boolean;
    getPageMarginTop(pageRule: CSSPageRule, pageWidth: number, pageHeight: number): any;
    getPageMarginTopImportant(pageRule: CSSPageRule): boolean;
    printBlankPage(): void;
    printNonNative(document: any): boolean;
    printNonNativeFrames(document: any, activeFrame: boolean): void;
    printPage(element: HTMLElement): void;
    showPageSetupDialog(): boolean;
    showPrintDialog(): boolean;
    startDoc(title: string): boolean;
    stopDoc(): void;
    updatePageStatus(status: number): void;
}

declare var MSTemplatePrinter: {
    prototype: MSTemplatePrinter;
    new(): MSTemplatePrinter;
}

interface MSWebViewAsyncOperation extends EventTarget {
    error: DOMError;
    oncomplete: (ev: Event) => any;
    onerror: (ev: Event) => any;
    readyState: number;
    result: any;
    target: MSHTMLWebViewElement;
    type: number;
    start(): void;
    COMPLETED: number;
    ERROR: number;
    STARTED: number;
    TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;
    TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;
    TYPE_INVOKE_SCRIPT: number;
    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var MSWebViewAsyncOperation: {
    prototype: MSWebViewAsyncOperation;
    new(): MSWebViewAsyncOperation;
    COMPLETED: number;
    ERROR: number;
    STARTED: number;
    TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;
    TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;
    TYPE_INVOKE_SCRIPT: number;
}

interface MSWebViewSettings {
    isIndexedDBEnabled: boolean;
    isJavaScriptEnabled: boolean;
}

declare var MSWebViewSettings: {
    prototype: MSWebViewSettings;
    new(): MSWebViewSettings;
}

interface MediaElementAudioSourceNode extends AudioNode {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var MediaElementAudioSourceNode: {
    prototype: MediaElementAudioSourceNode;
    new(): MediaElementAudioSourceNode;
}

interface MediaError {
    code: number;
    msExtendedCode: number;
    MEDIA_ERR_ABORTED: number;
    MEDIA_ERR_DECODE: number;
    MEDIA_ERR_NETWORK: number;
    MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    MS_MEDIA_ERR_ENCRYPTED: number;
}

declare var MediaError: {
    prototype: MediaError;
    new(): MediaError;
    MEDIA_ERR_ABORTED: number;
    MEDIA_ERR_DECODE: number;
    MEDIA_ERR_NETWORK: number;
    MEDIA_ERR_SRC_NOT_SUPPORTED: number;
    MS_MEDIA_ERR_ENCRYPTED: number;
}

interface MediaList {
    length: number;
    mediaText: string;
    appendMedium(newMedium: string): void;
    deleteMedium(oldMedium: string): void;
    item(index: number): string;
    toString(): string;
    [index: number]: string;
}

declare var MediaList: {
    prototype: MediaList;
    new(): MediaList;
}

interface MediaQueryList {
    matches: boolean;
    media: string;
    addListener(listener: MediaQueryListListener): void;
    removeListener(listener: MediaQueryListListener): void;
}

declare var MediaQueryList: {
    prototype: MediaQueryList;
    new(): MediaQueryList;
}

interface MediaSource extends EventTarget {
    activeSourceBuffers: SourceBufferList;
    duration: number;
    readyState: string;
    sourceBuffers: SourceBufferList;
    addSourceBuffer(type: string): SourceBuffer;
    endOfStream(error?: string): void;
    isTypeSupported(type: string): boolean;
    removeSourceBuffer(sourceBuffer: SourceBuffer): void;
}

declare var MediaSource: {
    prototype: MediaSource;
    new(): MediaSource;
    isTypeSupported(type: string): boolean;
}

interface MessageChannel {
    port1: MessagePort;
    port2: MessagePort;
}

declare var MessageChannel: {
    prototype: MessageChannel;
    new(): MessageChannel;
}

interface MessageEvent extends Event {
    data: any;
    origin: string;
    ports: any;
    source: Window;
    initMessageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, dataArg: any, originArg: string, lastEventIdArg: string, sourceArg: Window): void;
}

declare var MessageEvent: {
    prototype: MessageEvent;
    new(): MessageEvent;
}

interface MessagePort extends EventTarget {
    onmessage: (ev: MessageEvent) => any;
    close(): void;
    postMessage(message?: any, ports?: any): void;
    start(): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var MessagePort: {
    prototype: MessagePort;
    new(): MessagePort;
}

interface MimeType {
    description: string;
    enabledPlugin: Plugin;
    suffixes: string;
    type: string;
}

declare var MimeType: {
    prototype: MimeType;
    new(): MimeType;
}

interface MimeTypeArray {
    length: number;
    item(index: number): Plugin;
    namedItem(type: string): Plugin;
    [index: number]: Plugin;
}

declare var MimeTypeArray: {
    prototype: MimeTypeArray;
    new(): MimeTypeArray;
}

interface MouseEvent extends UIEvent {
    altKey: boolean;
    button: number;
    buttons: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    fromElement: Element;
    layerX: number;
    layerY: number;
    metaKey: boolean;
    movementX: number;
    movementY: number;
    offsetX: number;
    offsetY: number;
    pageX: number;
    pageY: number;
    relatedTarget: EventTarget;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
    toElement: Element;
    which: number;
    x: number;
    y: number;
    getModifierState(keyArg: string): boolean;
    initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget): void;
}

declare var MouseEvent: {
    prototype: MouseEvent;
    new(typeArg: string, eventInitDict?: MouseEventInit): MouseEvent;
}

interface MouseWheelEvent extends MouseEvent {
    wheelDelta: number;
    wheelDeltaX: number;
    wheelDeltaY: number;
    initMouseWheelEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, wheelDeltaArg: number): void;
}

declare var MouseWheelEvent: {
    prototype: MouseWheelEvent;
    new(): MouseWheelEvent;
}

interface MutationEvent extends Event {
    attrChange: number;
    attrName: string;
    newValue: string;
    prevValue: string;
    relatedNode: Node;
    initMutationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, relatedNodeArg: Node, prevValueArg: string, newValueArg: string, attrNameArg: string, attrChangeArg: number): void;
    ADDITION: number;
    MODIFICATION: number;
    REMOVAL: number;
}

declare var MutationEvent: {
    prototype: MutationEvent;
    new(): MutationEvent;
    ADDITION: number;
    MODIFICATION: number;
    REMOVAL: number;
}

interface MutationObserver {
    disconnect(): void;
    observe(target: Node, options: MutationObserverInit): void;
    takeRecords(): MutationRecord[];
}

declare var MutationObserver: {
    prototype: MutationObserver;
    new(callback: MutationCallback): MutationObserver;
}

interface MutationRecord {
    addedNodes: NodeList;
    attributeName: string;
    attributeNamespace: string;
    nextSibling: Node;
    oldValue: string;
    previousSibling: Node;
    removedNodes: NodeList;
    target: Node;
    type: string;
}

declare var MutationRecord: {
    prototype: MutationRecord;
    new(): MutationRecord;
}

interface NamedNodeMap {
    length: number;
    getNamedItem(name: string): Attr;
    getNamedItemNS(namespaceURI: string, localName: string): Attr;
    item(index: number): Attr;
    removeNamedItem(name: string): Attr;
    removeNamedItemNS(namespaceURI: string, localName: string): Attr;
    setNamedItem(arg: Attr): Attr;
    setNamedItemNS(arg: Attr): Attr;
    [index: number]: Attr;
}

declare var NamedNodeMap: {
    prototype: NamedNodeMap;
    new(): NamedNodeMap;
}

interface NavigationCompletedEvent extends NavigationEvent {
    isSuccess: boolean;
    webErrorStatus: number;
}

declare var NavigationCompletedEvent: {
    prototype: NavigationCompletedEvent;
    new(): NavigationCompletedEvent;
}

interface NavigationEvent extends Event {
    uri: string;
}

declare var NavigationEvent: {
    prototype: NavigationEvent;
    new(): NavigationEvent;
}

interface NavigationEventWithReferrer extends NavigationEvent {
    referer: string;
}

declare var NavigationEventWithReferrer: {
    prototype: NavigationEventWithReferrer;
    new(): NavigationEventWithReferrer;
}

interface Navigator extends Object, NavigatorID, NavigatorOnLine, NavigatorContentUtils, NavigatorStorageUtils, NavigatorGeolocation, MSNavigatorDoNotTrack, MSFileSaver {
    appCodeName: string;
    appMinorVersion: string;
    browserLanguage: string;
    connectionSpeed: number;
    cookieEnabled: boolean;
    cpuClass: string;
    language: string;
    maxTouchPoints: number;
    mimeTypes: MSMimeTypesCollection;
    msManipulationViewsEnabled: boolean;
    msMaxTouchPoints: number;
    msPointerEnabled: boolean;
    plugins: MSPluginsCollection;
    pointerEnabled: boolean;
    systemLanguage: string;
    userLanguage: string;
    webdriver: boolean;
    getGamepads(): Gamepad[];
    javaEnabled(): boolean;
    msLaunchUri(uri: string, successCallback?: MSLaunchUriCallback, noHandlerCallback?: MSLaunchUriCallback): void;
}

declare var Navigator: {
    prototype: Navigator;
    new(): Navigator;
}

interface Node extends EventTarget {
    attributes: NamedNodeMap;
    baseURI: string;
    childNodes: NodeList;
    firstChild: Node;
    lastChild: Node;
    localName: string;
    namespaceURI: string;
    nextSibling: Node;
    nodeName: string;
    nodeType: number;
    nodeValue: string;
    ownerDocument: Document;
    parentElement: HTMLElement;
    parentNode: Node;
    prefix: string;
    previousSibling: Node;
    textContent: string;
    appendChild(newChild: Node): Node;
    cloneNode(deep?: boolean): Node;
    compareDocumentPosition(other: Node): number;
    hasAttributes(): boolean;
    hasChildNodes(): boolean;
    insertBefore(newChild: Node, refChild?: Node): Node;
    isDefaultNamespace(namespaceURI: string): boolean;
    isEqualNode(arg: Node): boolean;
    isSameNode(other: Node): boolean;
    lookupNamespaceURI(prefix: string): string;
    lookupPrefix(namespaceURI: string): string;
    normalize(): void;
    removeChild(oldChild: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    ATTRIBUTE_NODE: number;
    CDATA_SECTION_NODE: number;
    COMMENT_NODE: number;
    DOCUMENT_FRAGMENT_NODE: number;
    DOCUMENT_NODE: number;
    DOCUMENT_POSITION_CONTAINED_BY: number;
    DOCUMENT_POSITION_CONTAINS: number;
    DOCUMENT_POSITION_DISCONNECTED: number;
    DOCUMENT_POSITION_FOLLOWING: number;
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    DOCUMENT_POSITION_PRECEDING: number;
    DOCUMENT_TYPE_NODE: number;
    ELEMENT_NODE: number;
    ENTITY_NODE: number;
    ENTITY_REFERENCE_NODE: number;
    NOTATION_NODE: number;
    PROCESSING_INSTRUCTION_NODE: number;
    TEXT_NODE: number;
}

declare var Node: {
    prototype: Node;
    new(): Node;
    ATTRIBUTE_NODE: number;
    CDATA_SECTION_NODE: number;
    COMMENT_NODE: number;
    DOCUMENT_FRAGMENT_NODE: number;
    DOCUMENT_NODE: number;
    DOCUMENT_POSITION_CONTAINED_BY: number;
    DOCUMENT_POSITION_CONTAINS: number;
    DOCUMENT_POSITION_DISCONNECTED: number;
    DOCUMENT_POSITION_FOLLOWING: number;
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
    DOCUMENT_POSITION_PRECEDING: number;
    DOCUMENT_TYPE_NODE: number;
    ELEMENT_NODE: number;
    ENTITY_NODE: number;
    ENTITY_REFERENCE_NODE: number;
    NOTATION_NODE: number;
    PROCESSING_INSTRUCTION_NODE: number;
    TEXT_NODE: number;
}

interface NodeFilter {
    FILTER_ACCEPT: number;
    FILTER_REJECT: number;
    FILTER_SKIP: number;
    SHOW_ALL: number;
    SHOW_ATTRIBUTE: number;
    SHOW_CDATA_SECTION: number;
    SHOW_COMMENT: number;
    SHOW_DOCUMENT: number;
    SHOW_DOCUMENT_FRAGMENT: number;
    SHOW_DOCUMENT_TYPE: number;
    SHOW_ELEMENT: number;
    SHOW_ENTITY: number;
    SHOW_ENTITY_REFERENCE: number;
    SHOW_NOTATION: number;
    SHOW_PROCESSING_INSTRUCTION: number;
    SHOW_TEXT: number;
}
declare var NodeFilter: NodeFilter;

interface NodeIterator {
    expandEntityReferences: boolean;
    filter: NodeFilter;
    root: Node;
    whatToShow: number;
    detach(): void;
    nextNode(): Node;
    previousNode(): Node;
}

declare var NodeIterator: {
    prototype: NodeIterator;
    new(): NodeIterator;
}

interface NodeList {
    length: number;
    item(index: number): Node;
    [index: number]: Node;
}

declare var NodeList: {
    prototype: NodeList;
    new(): NodeList;
}

interface OES_element_index_uint {
}

declare var OES_element_index_uint: {
    prototype: OES_element_index_uint;
    new(): OES_element_index_uint;
}

interface OES_standard_derivatives {
    FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;
}

declare var OES_standard_derivatives: {
    prototype: OES_standard_derivatives;
    new(): OES_standard_derivatives;
    FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;
}

interface OES_texture_float {
}

declare var OES_texture_float: {
    prototype: OES_texture_float;
    new(): OES_texture_float;
}

interface OES_texture_float_linear {
}

declare var OES_texture_float_linear: {
    prototype: OES_texture_float_linear;
    new(): OES_texture_float_linear;
}

interface OfflineAudioCompletionEvent extends Event {
    renderedBuffer: AudioBuffer;
}

declare var OfflineAudioCompletionEvent: {
    prototype: OfflineAudioCompletionEvent;
    new(): OfflineAudioCompletionEvent;
}

interface OfflineAudioContext extends AudioContext {
    oncomplete: (ev: Event) => any;
    startRendering(): void;
    addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var OfflineAudioContext: {
    prototype: OfflineAudioContext;
    new(numberOfChannels: number, length: number, sampleRate: number): OfflineAudioContext;
}

interface OscillatorNode extends AudioNode {
    detune: AudioParam;
    frequency: AudioParam;
    onended: (ev: Event) => any;
    type: string;
    setPeriodicWave(periodicWave: PeriodicWave): void;
    start(when?: number): void;
    stop(when?: number): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var OscillatorNode: {
    prototype: OscillatorNode;
    new(): OscillatorNode;
}

interface PageTransitionEvent extends Event {
    persisted: boolean;
}

declare var PageTransitionEvent: {
    prototype: PageTransitionEvent;
    new(): PageTransitionEvent;
}

interface PannerNode extends AudioNode {
    coneInnerAngle: number;
    coneOuterAngle: number;
    coneOuterGain: number;
    distanceModel: string;
    maxDistance: number;
    panningModel: string;
    refDistance: number;
    rolloffFactor: number;
    setOrientation(x: number, y: number, z: number): void;
    setPosition(x: number, y: number, z: number): void;
    setVelocity(x: number, y: number, z: number): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var PannerNode: {
    prototype: PannerNode;
    new(): PannerNode;
}

interface PerfWidgetExternal {
    activeNetworkRequestCount: number;
    averageFrameTime: number;
    averagePaintTime: number;
    extraInformationEnabled: boolean;
    independentRenderingEnabled: boolean;
    irDisablingContentString: string;
    irStatusAvailable: boolean;
    maxCpuSpeed: number;
    paintRequestsPerSecond: number;
    performanceCounter: number;
    performanceCounterFrequency: number;
    addEventListener(eventType: string, callback: Function): void;
    getMemoryUsage(): number;
    getProcessCpuUsage(): number;
    getRecentCpuUsage(last: number): any;
    getRecentFrames(last: number): any;
    getRecentMemoryUsage(last: number): any;
    getRecentPaintRequests(last: number): any;
    removeEventListener(eventType: string, callback: Function): void;
    repositionWindow(x: number, y: number): void;
    resizeWindow(width: number, height: number): void;
}

declare var PerfWidgetExternal: {
    prototype: PerfWidgetExternal;
    new(): PerfWidgetExternal;
}

interface Performance {
    navigation: PerformanceNavigation;
    timing: PerformanceTiming;
    clearMarks(markName?: string): void;
    clearMeasures(measureName?: string): void;
    clearResourceTimings(): void;
    getEntries(): any;
    getEntriesByName(name: string, entryType?: string): any;
    getEntriesByType(entryType: string): any;
    getMarks(markName?: string): any;
    getMeasures(measureName?: string): any;
    mark(markName: string): void;
    measure(measureName: string, startMarkName?: string, endMarkName?: string): void;
    now(): number;
    setResourceTimingBufferSize(maxSize: number): void;
    toJSON(): any;
}

declare var Performance: {
    prototype: Performance;
    new(): Performance;
}

interface PerformanceEntry {
    duration: number;
    entryType: string;
    name: string;
    startTime: number;
}

declare var PerformanceEntry: {
    prototype: PerformanceEntry;
    new(): PerformanceEntry;
}

interface PerformanceMark extends PerformanceEntry {
}

declare var PerformanceMark: {
    prototype: PerformanceMark;
    new(): PerformanceMark;
}

interface PerformanceMeasure extends PerformanceEntry {
}

declare var PerformanceMeasure: {
    prototype: PerformanceMeasure;
    new(): PerformanceMeasure;
}

interface PerformanceNavigation {
    redirectCount: number;
    type: number;
    toJSON(): any;
    TYPE_BACK_FORWARD: number;
    TYPE_NAVIGATE: number;
    TYPE_RELOAD: number;
    TYPE_RESERVED: number;
}

declare var PerformanceNavigation: {
    prototype: PerformanceNavigation;
    new(): PerformanceNavigation;
    TYPE_BACK_FORWARD: number;
    TYPE_NAVIGATE: number;
    TYPE_RELOAD: number;
    TYPE_RESERVED: number;
}

interface PerformanceNavigationTiming extends PerformanceEntry {
    connectEnd: number;
    connectStart: number;
    domComplete: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    domInteractive: number;
    domLoading: number;
    domainLookupEnd: number;
    domainLookupStart: number;
    fetchStart: number;
    loadEventEnd: number;
    loadEventStart: number;
    navigationStart: number;
    redirectCount: number;
    redirectEnd: number;
    redirectStart: number;
    requestStart: number;
    responseEnd: number;
    responseStart: number;
    type: string;
    unloadEventEnd: number;
    unloadEventStart: number;
}

declare var PerformanceNavigationTiming: {
    prototype: PerformanceNavigationTiming;
    new(): PerformanceNavigationTiming;
}

interface PerformanceResourceTiming extends PerformanceEntry {
    connectEnd: number;
    connectStart: number;
    domainLookupEnd: number;
    domainLookupStart: number;
    fetchStart: number;
    initiatorType: string;
    redirectEnd: number;
    redirectStart: number;
    requestStart: number;
    responseEnd: number;
    responseStart: number;
}

declare var PerformanceResourceTiming: {
    prototype: PerformanceResourceTiming;
    new(): PerformanceResourceTiming;
}

interface PerformanceTiming {
    connectEnd: number;
    connectStart: number;
    domComplete: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    domInteractive: number;
    domLoading: number;
    domainLookupEnd: number;
    domainLookupStart: number;
    fetchStart: number;
    loadEventEnd: number;
    loadEventStart: number;
    msFirstPaint: number;
    navigationStart: number;
    redirectEnd: number;
    redirectStart: number;
    requestStart: number;
    responseEnd: number;
    responseStart: number;
    unloadEventEnd: number;
    unloadEventStart: number;
    toJSON(): any;
}

declare var PerformanceTiming: {
    prototype: PerformanceTiming;
    new(): PerformanceTiming;
}

interface PeriodicWave {
}

declare var PeriodicWave: {
    prototype: PeriodicWave;
    new(): PeriodicWave;
}

interface PermissionRequest extends DeferredPermissionRequest {
    state: string;
    defer(): void;
}

declare var PermissionRequest: {
    prototype: PermissionRequest;
    new(): PermissionRequest;
}

interface PermissionRequestedEvent extends Event {
    permissionRequest: PermissionRequest;
}

declare var PermissionRequestedEvent: {
    prototype: PermissionRequestedEvent;
    new(): PermissionRequestedEvent;
}

interface Plugin {
    description: string;
    filename: string;
    length: number;
    name: string;
    version: string;
    item(index: number): MimeType;
    namedItem(type: string): MimeType;
    [index: number]: MimeType;
}

declare var Plugin: {
    prototype: Plugin;
    new(): Plugin;
}

interface PluginArray {
    length: number;
    item(index: number): Plugin;
    namedItem(name: string): Plugin;
    refresh(reload?: boolean): void;
    [index: number]: Plugin;
}

declare var PluginArray: {
    prototype: PluginArray;
    new(): PluginArray;
}

interface PointerEvent extends MouseEvent {
    currentPoint: any;
    height: number;
    hwTimestamp: number;
    intermediatePoints: any;
    isPrimary: boolean;
    pointerId: number;
    pointerType: any;
    pressure: number;
    rotation: number;
    tiltX: number;
    tiltY: number;
    width: number;
    getCurrentPoint(element: Element): void;
    getIntermediatePoints(element: Element): void;
    initPointerEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean): void;
}

declare var PointerEvent: {
    prototype: PointerEvent;
    new(typeArg: string, eventInitDict?: PointerEventInit): PointerEvent;
}

interface PopStateEvent extends Event {
    state: any;
    initPopStateEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, stateArg: any): void;
}

declare var PopStateEvent: {
    prototype: PopStateEvent;
    new(): PopStateEvent;
}

interface Position {
    coords: Coordinates;
    timestamp: Date;
}

declare var Position: {
    prototype: Position;
    new(): Position;
}

interface PositionError {
    code: number;
    message: string;
    toString(): string;
    PERMISSION_DENIED: number;
    POSITION_UNAVAILABLE: number;
    TIMEOUT: number;
}

declare var PositionError: {
    prototype: PositionError;
    new(): PositionError;
    PERMISSION_DENIED: number;
    POSITION_UNAVAILABLE: number;
    TIMEOUT: number;
}

interface ProcessingInstruction extends CharacterData {
    target: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var ProcessingInstruction: {
    prototype: ProcessingInstruction;
    new(): ProcessingInstruction;
}

interface ProgressEvent extends Event {
    lengthComputable: boolean;
    loaded: number;
    total: number;
    initProgressEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, lengthComputableArg: boolean, loadedArg: number, totalArg: number): void;
}

declare var ProgressEvent: {
    prototype: ProgressEvent;
    new(): ProgressEvent;
}

interface Range {
    collapsed: boolean;
    commonAncestorContainer: Node;
    endContainer: Node;
    endOffset: number;
    startContainer: Node;
    startOffset: number;
    cloneContents(): DocumentFragment;
    cloneRange(): Range;
    collapse(toStart: boolean): void;
    compareBoundaryPoints(how: number, sourceRange: Range): number;
    createContextualFragment(fragment: string): DocumentFragment;
    deleteContents(): void;
    detach(): void;
    expand(Unit: string): boolean;
    extractContents(): DocumentFragment;
    getBoundingClientRect(): ClientRect;
    getClientRects(): ClientRectList;
    insertNode(newNode: Node): void;
    selectNode(refNode: Node): void;
    selectNodeContents(refNode: Node): void;
    setEnd(refNode: Node, offset: number): void;
    setEndAfter(refNode: Node): void;
    setEndBefore(refNode: Node): void;
    setStart(refNode: Node, offset: number): void;
    setStartAfter(refNode: Node): void;
    setStartBefore(refNode: Node): void;
    surroundContents(newParent: Node): void;
    toString(): string;
    END_TO_END: number;
    END_TO_START: number;
    START_TO_END: number;
    START_TO_START: number;
}

declare var Range: {
    prototype: Range;
    new(): Range;
    END_TO_END: number;
    END_TO_START: number;
    START_TO_END: number;
    START_TO_START: number;
}

interface SVGAElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired, SVGURIReference {
    target: SVGAnimatedString;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGAElement: {
    prototype: SVGAElement;
    new(): SVGAElement;
}

interface SVGAngle {
    unitType: number;
    value: number;
    valueAsString: string;
    valueInSpecifiedUnits: number;
    convertToSpecifiedUnits(unitType: number): void;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    SVG_ANGLETYPE_DEG: number;
    SVG_ANGLETYPE_GRAD: number;
    SVG_ANGLETYPE_RAD: number;
    SVG_ANGLETYPE_UNKNOWN: number;
    SVG_ANGLETYPE_UNSPECIFIED: number;
}

declare var SVGAngle: {
    prototype: SVGAngle;
    new(): SVGAngle;
    SVG_ANGLETYPE_DEG: number;
    SVG_ANGLETYPE_GRAD: number;
    SVG_ANGLETYPE_RAD: number;
    SVG_ANGLETYPE_UNKNOWN: number;
    SVG_ANGLETYPE_UNSPECIFIED: number;
}

interface SVGAnimatedAngle {
    animVal: SVGAngle;
    baseVal: SVGAngle;
}

declare var SVGAnimatedAngle: {
    prototype: SVGAnimatedAngle;
    new(): SVGAnimatedAngle;
}

interface SVGAnimatedBoolean {
    animVal: boolean;
    baseVal: boolean;
}

declare var SVGAnimatedBoolean: {
    prototype: SVGAnimatedBoolean;
    new(): SVGAnimatedBoolean;
}

interface SVGAnimatedEnumeration {
    animVal: number;
    baseVal: number;
}

declare var SVGAnimatedEnumeration: {
    prototype: SVGAnimatedEnumeration;
    new(): SVGAnimatedEnumeration;
}

interface SVGAnimatedInteger {
    animVal: number;
    baseVal: number;
}

declare var SVGAnimatedInteger: {
    prototype: SVGAnimatedInteger;
    new(): SVGAnimatedInteger;
}

interface SVGAnimatedLength {
    animVal: SVGLength;
    baseVal: SVGLength;
}

declare var SVGAnimatedLength: {
    prototype: SVGAnimatedLength;
    new(): SVGAnimatedLength;
}

interface SVGAnimatedLengthList {
    animVal: SVGLengthList;
    baseVal: SVGLengthList;
}

declare var SVGAnimatedLengthList: {
    prototype: SVGAnimatedLengthList;
    new(): SVGAnimatedLengthList;
}

interface SVGAnimatedNumber {
    animVal: number;
    baseVal: number;
}

declare var SVGAnimatedNumber: {
    prototype: SVGAnimatedNumber;
    new(): SVGAnimatedNumber;
}

interface SVGAnimatedNumberList {
    animVal: SVGNumberList;
    baseVal: SVGNumberList;
}

declare var SVGAnimatedNumberList: {
    prototype: SVGAnimatedNumberList;
    new(): SVGAnimatedNumberList;
}

interface SVGAnimatedPreserveAspectRatio {
    animVal: SVGPreserveAspectRatio;
    baseVal: SVGPreserveAspectRatio;
}

declare var SVGAnimatedPreserveAspectRatio: {
    prototype: SVGAnimatedPreserveAspectRatio;
    new(): SVGAnimatedPreserveAspectRatio;
}

interface SVGAnimatedRect {
    animVal: SVGRect;
    baseVal: SVGRect;
}

declare var SVGAnimatedRect: {
    prototype: SVGAnimatedRect;
    new(): SVGAnimatedRect;
}

interface SVGAnimatedString {
    animVal: string;
    baseVal: string;
}

declare var SVGAnimatedString: {
    prototype: SVGAnimatedString;
    new(): SVGAnimatedString;
}

interface SVGAnimatedTransformList {
    animVal: SVGTransformList;
    baseVal: SVGTransformList;
}

declare var SVGAnimatedTransformList: {
    prototype: SVGAnimatedTransformList;
    new(): SVGAnimatedTransformList;
}

interface SVGCircleElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired {
    cx: SVGAnimatedLength;
    cy: SVGAnimatedLength;
    r: SVGAnimatedLength;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGCircleElement: {
    prototype: SVGCircleElement;
    new(): SVGCircleElement;
}

interface SVGClipPathElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired, SVGUnitTypes {
    clipPathUnits: SVGAnimatedEnumeration;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGClipPathElement: {
    prototype: SVGClipPathElement;
    new(): SVGClipPathElement;
}

interface SVGComponentTransferFunctionElement extends SVGElement {
    amplitude: SVGAnimatedNumber;
    exponent: SVGAnimatedNumber;
    intercept: SVGAnimatedNumber;
    offset: SVGAnimatedNumber;
    slope: SVGAnimatedNumber;
    tableValues: SVGAnimatedNumberList;
    type: SVGAnimatedEnumeration;
    SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
    SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGComponentTransferFunctionElement: {
    prototype: SVGComponentTransferFunctionElement;
    new(): SVGComponentTransferFunctionElement;
    SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
    SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
    SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
    SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
    SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
}

interface SVGDefsElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGDefsElement: {
    prototype: SVGDefsElement;
    new(): SVGDefsElement;
}

interface SVGDescElement extends SVGElement, SVGStylable, SVGLangSpace {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGDescElement: {
    prototype: SVGDescElement;
    new(): SVGDescElement;
}

interface SVGElement extends Element {
    id: string;
    onclick: (ev: MouseEvent) => any;
    ondblclick: (ev: MouseEvent) => any;
    onfocusin: (ev: FocusEvent) => any;
    onfocusout: (ev: FocusEvent) => any;
    onload: (ev: Event) => any;
    onmousedown: (ev: MouseEvent) => any;
    onmousemove: (ev: MouseEvent) => any;
    onmouseout: (ev: MouseEvent) => any;
    onmouseover: (ev: MouseEvent) => any;
    onmouseup: (ev: MouseEvent) => any;
    ownerSVGElement: SVGSVGElement;
    viewportElement: SVGElement;
    xmlbase: string;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGElement: {
    prototype: SVGElement;
    new(): SVGElement;
}

interface SVGElementInstance extends EventTarget {
    childNodes: SVGElementInstanceList;
    correspondingElement: SVGElement;
    correspondingUseElement: SVGUseElement;
    firstChild: SVGElementInstance;
    lastChild: SVGElementInstance;
    nextSibling: SVGElementInstance;
    parentNode: SVGElementInstance;
    previousSibling: SVGElementInstance;
}

declare var SVGElementInstance: {
    prototype: SVGElementInstance;
    new(): SVGElementInstance;
}

interface SVGElementInstanceList {
    length: number;
    item(index: number): SVGElementInstance;
}

declare var SVGElementInstanceList: {
    prototype: SVGElementInstanceList;
    new(): SVGElementInstanceList;
}

interface SVGEllipseElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired {
    cx: SVGAnimatedLength;
    cy: SVGAnimatedLength;
    rx: SVGAnimatedLength;
    ry: SVGAnimatedLength;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGEllipseElement: {
    prototype: SVGEllipseElement;
    new(): SVGEllipseElement;
}

interface SVGFEBlendElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
    in2: SVGAnimatedString;
    mode: SVGAnimatedEnumeration;
    SVG_FEBLEND_MODE_COLOR: number;
    SVG_FEBLEND_MODE_COLOR_BURN: number;
    SVG_FEBLEND_MODE_COLOR_DODGE: number;
    SVG_FEBLEND_MODE_DARKEN: number;
    SVG_FEBLEND_MODE_DIFFERENCE: number;
    SVG_FEBLEND_MODE_EXCLUSION: number;
    SVG_FEBLEND_MODE_HARD_LIGHT: number;
    SVG_FEBLEND_MODE_HUE: number;
    SVG_FEBLEND_MODE_LIGHTEN: number;
    SVG_FEBLEND_MODE_LUMINOSITY: number;
    SVG_FEBLEND_MODE_MULTIPLY: number;
    SVG_FEBLEND_MODE_NORMAL: number;
    SVG_FEBLEND_MODE_OVERLAY: number;
    SVG_FEBLEND_MODE_SATURATION: number;
    SVG_FEBLEND_MODE_SCREEN: number;
    SVG_FEBLEND_MODE_SOFT_LIGHT: number;
    SVG_FEBLEND_MODE_UNKNOWN: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEBlendElement: {
    prototype: SVGFEBlendElement;
    new(): SVGFEBlendElement;
    SVG_FEBLEND_MODE_COLOR: number;
    SVG_FEBLEND_MODE_COLOR_BURN: number;
    SVG_FEBLEND_MODE_COLOR_DODGE: number;
    SVG_FEBLEND_MODE_DARKEN: number;
    SVG_FEBLEND_MODE_DIFFERENCE: number;
    SVG_FEBLEND_MODE_EXCLUSION: number;
    SVG_FEBLEND_MODE_HARD_LIGHT: number;
    SVG_FEBLEND_MODE_HUE: number;
    SVG_FEBLEND_MODE_LIGHTEN: number;
    SVG_FEBLEND_MODE_LUMINOSITY: number;
    SVG_FEBLEND_MODE_MULTIPLY: number;
    SVG_FEBLEND_MODE_NORMAL: number;
    SVG_FEBLEND_MODE_OVERLAY: number;
    SVG_FEBLEND_MODE_SATURATION: number;
    SVG_FEBLEND_MODE_SCREEN: number;
    SVG_FEBLEND_MODE_SOFT_LIGHT: number;
    SVG_FEBLEND_MODE_UNKNOWN: number;
}

interface SVGFEColorMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
    type: SVGAnimatedEnumeration;
    values: SVGAnimatedNumberList;
    SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
    SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEColorMatrixElement: {
    prototype: SVGFEColorMatrixElement;
    new(): SVGFEColorMatrixElement;
    SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
    SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
    SVG_FECOLORMATRIX_TYPE_MATRIX: number;
    SVG_FECOLORMATRIX_TYPE_SATURATE: number;
    SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
}

interface SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEComponentTransferElement: {
    prototype: SVGFEComponentTransferElement;
    new(): SVGFEComponentTransferElement;
}

interface SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
    in2: SVGAnimatedString;
    k1: SVGAnimatedNumber;
    k2: SVGAnimatedNumber;
    k3: SVGAnimatedNumber;
    k4: SVGAnimatedNumber;
    operator: SVGAnimatedEnumeration;
    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    SVG_FECOMPOSITE_OPERATOR_ATOP: number;
    SVG_FECOMPOSITE_OPERATOR_IN: number;
    SVG_FECOMPOSITE_OPERATOR_OUT: number;
    SVG_FECOMPOSITE_OPERATOR_OVER: number;
    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    SVG_FECOMPOSITE_OPERATOR_XOR: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFECompositeElement: {
    prototype: SVGFECompositeElement;
    new(): SVGFECompositeElement;
    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
    SVG_FECOMPOSITE_OPERATOR_ATOP: number;
    SVG_FECOMPOSITE_OPERATOR_IN: number;
    SVG_FECOMPOSITE_OPERATOR_OUT: number;
    SVG_FECOMPOSITE_OPERATOR_OVER: number;
    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
    SVG_FECOMPOSITE_OPERATOR_XOR: number;
}

interface SVGFEConvolveMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    bias: SVGAnimatedNumber;
    divisor: SVGAnimatedNumber;
    edgeMode: SVGAnimatedEnumeration;
    in1: SVGAnimatedString;
    kernelMatrix: SVGAnimatedNumberList;
    kernelUnitLengthX: SVGAnimatedNumber;
    kernelUnitLengthY: SVGAnimatedNumber;
    orderX: SVGAnimatedInteger;
    orderY: SVGAnimatedInteger;
    preserveAlpha: SVGAnimatedBoolean;
    targetX: SVGAnimatedInteger;
    targetY: SVGAnimatedInteger;
    SVG_EDGEMODE_DUPLICATE: number;
    SVG_EDGEMODE_NONE: number;
    SVG_EDGEMODE_UNKNOWN: number;
    SVG_EDGEMODE_WRAP: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEConvolveMatrixElement: {
    prototype: SVGFEConvolveMatrixElement;
    new(): SVGFEConvolveMatrixElement;
    SVG_EDGEMODE_DUPLICATE: number;
    SVG_EDGEMODE_NONE: number;
    SVG_EDGEMODE_UNKNOWN: number;
    SVG_EDGEMODE_WRAP: number;
}

interface SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    diffuseConstant: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    kernelUnitLengthX: SVGAnimatedNumber;
    kernelUnitLengthY: SVGAnimatedNumber;
    surfaceScale: SVGAnimatedNumber;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEDiffuseLightingElement: {
    prototype: SVGFEDiffuseLightingElement;
    new(): SVGFEDiffuseLightingElement;
}

interface SVGFEDisplacementMapElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
    in2: SVGAnimatedString;
    scale: SVGAnimatedNumber;
    xChannelSelector: SVGAnimatedEnumeration;
    yChannelSelector: SVGAnimatedEnumeration;
    SVG_CHANNEL_A: number;
    SVG_CHANNEL_B: number;
    SVG_CHANNEL_G: number;
    SVG_CHANNEL_R: number;
    SVG_CHANNEL_UNKNOWN: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEDisplacementMapElement: {
    prototype: SVGFEDisplacementMapElement;
    new(): SVGFEDisplacementMapElement;
    SVG_CHANNEL_A: number;
    SVG_CHANNEL_B: number;
    SVG_CHANNEL_G: number;
    SVG_CHANNEL_R: number;
    SVG_CHANNEL_UNKNOWN: number;
}

interface SVGFEDistantLightElement extends SVGElement {
    azimuth: SVGAnimatedNumber;
    elevation: SVGAnimatedNumber;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEDistantLightElement: {
    prototype: SVGFEDistantLightElement;
    new(): SVGFEDistantLightElement;
}

interface SVGFEFloodElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEFloodElement: {
    prototype: SVGFEFloodElement;
    new(): SVGFEFloodElement;
}

interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEFuncAElement: {
    prototype: SVGFEFuncAElement;
    new(): SVGFEFuncAElement;
}

interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEFuncBElement: {
    prototype: SVGFEFuncBElement;
    new(): SVGFEFuncBElement;
}

interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEFuncGElement: {
    prototype: SVGFEFuncGElement;
    new(): SVGFEFuncGElement;
}

interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEFuncRElement: {
    prototype: SVGFEFuncRElement;
    new(): SVGFEFuncRElement;
}

interface SVGFEGaussianBlurElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
    stdDeviationX: SVGAnimatedNumber;
    stdDeviationY: SVGAnimatedNumber;
    setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEGaussianBlurElement: {
    prototype: SVGFEGaussianBlurElement;
    new(): SVGFEGaussianBlurElement;
}

interface SVGFEImageElement extends SVGElement, SVGFilterPrimitiveStandardAttributes, SVGLangSpace, SVGURIReference, SVGExternalResourcesRequired {
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEImageElement: {
    prototype: SVGFEImageElement;
    new(): SVGFEImageElement;
}

interface SVGFEMergeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEMergeElement: {
    prototype: SVGFEMergeElement;
    new(): SVGFEMergeElement;
}

interface SVGFEMergeNodeElement extends SVGElement {
    in1: SVGAnimatedString;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEMergeNodeElement: {
    prototype: SVGFEMergeNodeElement;
    new(): SVGFEMergeNodeElement;
}

interface SVGFEMorphologyElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
    operator: SVGAnimatedEnumeration;
    radiusX: SVGAnimatedNumber;
    radiusY: SVGAnimatedNumber;
    SVG_MORPHOLOGY_OPERATOR_DILATE: number;
    SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEMorphologyElement: {
    prototype: SVGFEMorphologyElement;
    new(): SVGFEMorphologyElement;
    SVG_MORPHOLOGY_OPERATOR_DILATE: number;
    SVG_MORPHOLOGY_OPERATOR_ERODE: number;
    SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
}

interface SVGFEOffsetElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    dx: SVGAnimatedNumber;
    dy: SVGAnimatedNumber;
    in1: SVGAnimatedString;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEOffsetElement: {
    prototype: SVGFEOffsetElement;
    new(): SVGFEOffsetElement;
}

interface SVGFEPointLightElement extends SVGElement {
    x: SVGAnimatedNumber;
    y: SVGAnimatedNumber;
    z: SVGAnimatedNumber;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFEPointLightElement: {
    prototype: SVGFEPointLightElement;
    new(): SVGFEPointLightElement;
}

interface SVGFESpecularLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
    kernelUnitLengthX: SVGAnimatedNumber;
    kernelUnitLengthY: SVGAnimatedNumber;
    specularConstant: SVGAnimatedNumber;
    specularExponent: SVGAnimatedNumber;
    surfaceScale: SVGAnimatedNumber;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFESpecularLightingElement: {
    prototype: SVGFESpecularLightingElement;
    new(): SVGFESpecularLightingElement;
}

interface SVGFESpotLightElement extends SVGElement {
    limitingConeAngle: SVGAnimatedNumber;
    pointsAtX: SVGAnimatedNumber;
    pointsAtY: SVGAnimatedNumber;
    pointsAtZ: SVGAnimatedNumber;
    specularExponent: SVGAnimatedNumber;
    x: SVGAnimatedNumber;
    y: SVGAnimatedNumber;
    z: SVGAnimatedNumber;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFESpotLightElement: {
    prototype: SVGFESpotLightElement;
    new(): SVGFESpotLightElement;
}

interface SVGFETileElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    in1: SVGAnimatedString;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFETileElement: {
    prototype: SVGFETileElement;
    new(): SVGFETileElement;
}

interface SVGFETurbulenceElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {
    baseFrequencyX: SVGAnimatedNumber;
    baseFrequencyY: SVGAnimatedNumber;
    numOctaves: SVGAnimatedInteger;
    seed: SVGAnimatedNumber;
    stitchTiles: SVGAnimatedEnumeration;
    type: SVGAnimatedEnumeration;
    SVG_STITCHTYPE_NOSTITCH: number;
    SVG_STITCHTYPE_STITCH: number;
    SVG_STITCHTYPE_UNKNOWN: number;
    SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    SVG_TURBULENCE_TYPE_TURBULENCE: number;
    SVG_TURBULENCE_TYPE_UNKNOWN: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFETurbulenceElement: {
    prototype: SVGFETurbulenceElement;
    new(): SVGFETurbulenceElement;
    SVG_STITCHTYPE_NOSTITCH: number;
    SVG_STITCHTYPE_STITCH: number;
    SVG_STITCHTYPE_UNKNOWN: number;
    SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
    SVG_TURBULENCE_TYPE_TURBULENCE: number;
    SVG_TURBULENCE_TYPE_UNKNOWN: number;
}

interface SVGFilterElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGURIReference, SVGExternalResourcesRequired {
    filterResX: SVGAnimatedInteger;
    filterResY: SVGAnimatedInteger;
    filterUnits: SVGAnimatedEnumeration;
    height: SVGAnimatedLength;
    primitiveUnits: SVGAnimatedEnumeration;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    y: SVGAnimatedLength;
    setFilterRes(filterResX: number, filterResY: number): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGFilterElement: {
    prototype: SVGFilterElement;
    new(): SVGFilterElement;
}

interface SVGForeignObjectElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired {
    height: SVGAnimatedLength;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    y: SVGAnimatedLength;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGForeignObjectElement: {
    prototype: SVGForeignObjectElement;
    new(): SVGForeignObjectElement;
}

interface SVGGElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGGElement: {
    prototype: SVGGElement;
    new(): SVGGElement;
}

interface SVGGradientElement extends SVGElement, SVGStylable, SVGExternalResourcesRequired, SVGURIReference, SVGUnitTypes {
    gradientTransform: SVGAnimatedTransformList;
    gradientUnits: SVGAnimatedEnumeration;
    spreadMethod: SVGAnimatedEnumeration;
    SVG_SPREADMETHOD_PAD: number;
    SVG_SPREADMETHOD_REFLECT: number;
    SVG_SPREADMETHOD_REPEAT: number;
    SVG_SPREADMETHOD_UNKNOWN: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGGradientElement: {
    prototype: SVGGradientElement;
    new(): SVGGradientElement;
    SVG_SPREADMETHOD_PAD: number;
    SVG_SPREADMETHOD_REFLECT: number;
    SVG_SPREADMETHOD_REPEAT: number;
    SVG_SPREADMETHOD_UNKNOWN: number;
}

interface SVGImageElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired, SVGURIReference {
    height: SVGAnimatedLength;
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    y: SVGAnimatedLength;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGImageElement: {
    prototype: SVGImageElement;
    new(): SVGImageElement;
}

interface SVGLength {
    unitType: number;
    value: number;
    valueAsString: string;
    valueInSpecifiedUnits: number;
    convertToSpecifiedUnits(unitType: number): void;
    newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
    SVG_LENGTHTYPE_CM: number;
    SVG_LENGTHTYPE_EMS: number;
    SVG_LENGTHTYPE_EXS: number;
    SVG_LENGTHTYPE_IN: number;
    SVG_LENGTHTYPE_MM: number;
    SVG_LENGTHTYPE_NUMBER: number;
    SVG_LENGTHTYPE_PC: number;
    SVG_LENGTHTYPE_PERCENTAGE: number;
    SVG_LENGTHTYPE_PT: number;
    SVG_LENGTHTYPE_PX: number;
    SVG_LENGTHTYPE_UNKNOWN: number;
}

declare var SVGLength: {
    prototype: SVGLength;
    new(): SVGLength;
    SVG_LENGTHTYPE_CM: number;
    SVG_LENGTHTYPE_EMS: number;
    SVG_LENGTHTYPE_EXS: number;
    SVG_LENGTHTYPE_IN: number;
    SVG_LENGTHTYPE_MM: number;
    SVG_LENGTHTYPE_NUMBER: number;
    SVG_LENGTHTYPE_PC: number;
    SVG_LENGTHTYPE_PERCENTAGE: number;
    SVG_LENGTHTYPE_PT: number;
    SVG_LENGTHTYPE_PX: number;
    SVG_LENGTHTYPE_UNKNOWN: number;
}

interface SVGLengthList {
    numberOfItems: number;
    appendItem(newItem: SVGLength): SVGLength;
    clear(): void;
    getItem(index: number): SVGLength;
    initialize(newItem: SVGLength): SVGLength;
    insertItemBefore(newItem: SVGLength, index: number): SVGLength;
    removeItem(index: number): SVGLength;
    replaceItem(newItem: SVGLength, index: number): SVGLength;
}

declare var SVGLengthList: {
    prototype: SVGLengthList;
    new(): SVGLengthList;
}

interface SVGLineElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired {
    x1: SVGAnimatedLength;
    x2: SVGAnimatedLength;
    y1: SVGAnimatedLength;
    y2: SVGAnimatedLength;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGLineElement: {
    prototype: SVGLineElement;
    new(): SVGLineElement;
}

interface SVGLinearGradientElement extends SVGGradientElement {
    x1: SVGAnimatedLength;
    x2: SVGAnimatedLength;
    y1: SVGAnimatedLength;
    y2: SVGAnimatedLength;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGLinearGradientElement: {
    prototype: SVGLinearGradientElement;
    new(): SVGLinearGradientElement;
}

interface SVGMarkerElement extends SVGElement, SVGStylable, SVGLangSpace, SVGExternalResourcesRequired, SVGFitToViewBox {
    markerHeight: SVGAnimatedLength;
    markerUnits: SVGAnimatedEnumeration;
    markerWidth: SVGAnimatedLength;
    orientAngle: SVGAnimatedAngle;
    orientType: SVGAnimatedEnumeration;
    refX: SVGAnimatedLength;
    refY: SVGAnimatedLength;
    setOrientToAngle(angle: SVGAngle): void;
    setOrientToAuto(): void;
    SVG_MARKERUNITS_STROKEWIDTH: number;
    SVG_MARKERUNITS_UNKNOWN: number;
    SVG_MARKERUNITS_USERSPACEONUSE: number;
    SVG_MARKER_ORIENT_ANGLE: number;
    SVG_MARKER_ORIENT_AUTO: number;
    SVG_MARKER_ORIENT_UNKNOWN: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGMarkerElement: {
    prototype: SVGMarkerElement;
    new(): SVGMarkerElement;
    SVG_MARKERUNITS_STROKEWIDTH: number;
    SVG_MARKERUNITS_UNKNOWN: number;
    SVG_MARKERUNITS_USERSPACEONUSE: number;
    SVG_MARKER_ORIENT_ANGLE: number;
    SVG_MARKER_ORIENT_AUTO: number;
    SVG_MARKER_ORIENT_UNKNOWN: number;
}

interface SVGMaskElement extends SVGElement, SVGStylable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired, SVGUnitTypes {
    height: SVGAnimatedLength;
    maskContentUnits: SVGAnimatedEnumeration;
    maskUnits: SVGAnimatedEnumeration;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    y: SVGAnimatedLength;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGMaskElement: {
    prototype: SVGMaskElement;
    new(): SVGMaskElement;
}

interface SVGMatrix {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    flipX(): SVGMatrix;
    flipY(): SVGMatrix;
    inverse(): SVGMatrix;
    multiply(secondMatrix: SVGMatrix): SVGMatrix;
    rotate(angle: number): SVGMatrix;
    rotateFromVector(x: number, y: number): SVGMatrix;
    scale(scaleFactor: number): SVGMatrix;
    scaleNonUniform(scaleFactorX: number, scaleFactorY: number): SVGMatrix;
    skewX(angle: number): SVGMatrix;
    skewY(angle: number): SVGMatrix;
    translate(x: number, y: number): SVGMatrix;
}

declare var SVGMatrix: {
    prototype: SVGMatrix;
    new(): SVGMatrix;
}

interface SVGMetadataElement extends SVGElement {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGMetadataElement: {
    prototype: SVGMetadataElement;
    new(): SVGMetadataElement;
}

interface SVGNumber {
    value: number;
}

declare var SVGNumber: {
    prototype: SVGNumber;
    new(): SVGNumber;
}

interface SVGNumberList {
    numberOfItems: number;
    appendItem(newItem: SVGNumber): SVGNumber;
    clear(): void;
    getItem(index: number): SVGNumber;
    initialize(newItem: SVGNumber): SVGNumber;
    insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;
    removeItem(index: number): SVGNumber;
    replaceItem(newItem: SVGNumber, index: number): SVGNumber;
}

declare var SVGNumberList: {
    prototype: SVGNumberList;
    new(): SVGNumberList;
}

interface SVGPathElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired, SVGAnimatedPathData {
    createSVGPathSegArcAbs(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean): SVGPathSegArcAbs;
    createSVGPathSegArcRel(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean): SVGPathSegArcRel;
    createSVGPathSegClosePath(): SVGPathSegClosePath;
    createSVGPathSegCurvetoCubicAbs(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicAbs;
    createSVGPathSegCurvetoCubicRel(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicRel;
    createSVGPathSegCurvetoCubicSmoothAbs(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothAbs;
    createSVGPathSegCurvetoCubicSmoothRel(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothRel;
    createSVGPathSegCurvetoQuadraticAbs(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticAbs;
    createSVGPathSegCurvetoQuadraticRel(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticRel;
    createSVGPathSegCurvetoQuadraticSmoothAbs(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothAbs;
    createSVGPathSegCurvetoQuadraticSmoothRel(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothRel;
    createSVGPathSegLinetoAbs(x: number, y: number): SVGPathSegLinetoAbs;
    createSVGPathSegLinetoHorizontalAbs(x: number): SVGPathSegLinetoHorizontalAbs;
    createSVGPathSegLinetoHorizontalRel(x: number): SVGPathSegLinetoHorizontalRel;
    createSVGPathSegLinetoRel(x: number, y: number): SVGPathSegLinetoRel;
    createSVGPathSegLinetoVerticalAbs(y: number): SVGPathSegLinetoVerticalAbs;
    createSVGPathSegLinetoVerticalRel(y: number): SVGPathSegLinetoVerticalRel;
    createSVGPathSegMovetoAbs(x: number, y: number): SVGPathSegMovetoAbs;
    createSVGPathSegMovetoRel(x: number, y: number): SVGPathSegMovetoRel;
    getPathSegAtLength(distance: number): number;
    getPointAtLength(distance: number): SVGPoint;
    getTotalLength(): number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGPathElement: {
    prototype: SVGPathElement;
    new(): SVGPathElement;
}

interface SVGPathSeg {
    pathSegType: number;
    pathSegTypeAsLetter: string;
    PATHSEG_ARC_ABS: number;
    PATHSEG_ARC_REL: number;
    PATHSEG_CLOSEPATH: number;
    PATHSEG_CURVETO_CUBIC_ABS: number;
    PATHSEG_CURVETO_CUBIC_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
    PATHSEG_CURVETO_QUADRATIC_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_REL: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
    PATHSEG_LINETO_ABS: number;
    PATHSEG_LINETO_HORIZONTAL_ABS: number;
    PATHSEG_LINETO_HORIZONTAL_REL: number;
    PATHSEG_LINETO_REL: number;
    PATHSEG_LINETO_VERTICAL_ABS: number;
    PATHSEG_LINETO_VERTICAL_REL: number;
    PATHSEG_MOVETO_ABS: number;
    PATHSEG_MOVETO_REL: number;
    PATHSEG_UNKNOWN: number;
}

declare var SVGPathSeg: {
    prototype: SVGPathSeg;
    new(): SVGPathSeg;
    PATHSEG_ARC_ABS: number;
    PATHSEG_ARC_REL: number;
    PATHSEG_CLOSEPATH: number;
    PATHSEG_CURVETO_CUBIC_ABS: number;
    PATHSEG_CURVETO_CUBIC_REL: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
    PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
    PATHSEG_CURVETO_QUADRATIC_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_REL: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
    PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
    PATHSEG_LINETO_ABS: number;
    PATHSEG_LINETO_HORIZONTAL_ABS: number;
    PATHSEG_LINETO_HORIZONTAL_REL: number;
    PATHSEG_LINETO_REL: number;
    PATHSEG_LINETO_VERTICAL_ABS: number;
    PATHSEG_LINETO_VERTICAL_REL: number;
    PATHSEG_MOVETO_ABS: number;
    PATHSEG_MOVETO_REL: number;
    PATHSEG_UNKNOWN: number;
}

interface SVGPathSegArcAbs extends SVGPathSeg {
    angle: number;
    largeArcFlag: boolean;
    r1: number;
    r2: number;
    sweepFlag: boolean;
    x: number;
    y: number;
}

declare var SVGPathSegArcAbs: {
    prototype: SVGPathSegArcAbs;
    new(): SVGPathSegArcAbs;
}

interface SVGPathSegArcRel extends SVGPathSeg {
    angle: number;
    largeArcFlag: boolean;
    r1: number;
    r2: number;
    sweepFlag: boolean;
    x: number;
    y: number;
}

declare var SVGPathSegArcRel: {
    prototype: SVGPathSegArcRel;
    new(): SVGPathSegArcRel;
}

interface SVGPathSegClosePath extends SVGPathSeg {
}

declare var SVGPathSegClosePath: {
    prototype: SVGPathSegClosePath;
    new(): SVGPathSegClosePath;
}

interface SVGPathSegCurvetoCubicAbs extends SVGPathSeg {
    x: number;
    x1: number;
    x2: number;
    y: number;
    y1: number;
    y2: number;
}

declare var SVGPathSegCurvetoCubicAbs: {
    prototype: SVGPathSegCurvetoCubicAbs;
    new(): SVGPathSegCurvetoCubicAbs;
}

interface SVGPathSegCurvetoCubicRel extends SVGPathSeg {
    x: number;
    x1: number;
    x2: number;
    y: number;
    y1: number;
    y2: number;
}

declare var SVGPathSegCurvetoCubicRel: {
    prototype: SVGPathSegCurvetoCubicRel;
    new(): SVGPathSegCurvetoCubicRel;
}

interface SVGPathSegCurvetoCubicSmoothAbs extends SVGPathSeg {
    x: number;
    x2: number;
    y: number;
    y2: number;
}

declare var SVGPathSegCurvetoCubicSmoothAbs: {
    prototype: SVGPathSegCurvetoCubicSmoothAbs;
    new(): SVGPathSegCurvetoCubicSmoothAbs;
}

interface SVGPathSegCurvetoCubicSmoothRel extends SVGPathSeg {
    x: number;
    x2: number;
    y: number;
    y2: number;
}

declare var SVGPathSegCurvetoCubicSmoothRel: {
    prototype: SVGPathSegCurvetoCubicSmoothRel;
    new(): SVGPathSegCurvetoCubicSmoothRel;
}

interface SVGPathSegCurvetoQuadraticAbs extends SVGPathSeg {
    x: number;
    x1: number;
    y: number;
    y1: number;
}

declare var SVGPathSegCurvetoQuadraticAbs: {
    prototype: SVGPathSegCurvetoQuadraticAbs;
    new(): SVGPathSegCurvetoQuadraticAbs;
}

interface SVGPathSegCurvetoQuadraticRel extends SVGPathSeg {
    x: number;
    x1: number;
    y: number;
    y1: number;
}

declare var SVGPathSegCurvetoQuadraticRel: {
    prototype: SVGPathSegCurvetoQuadraticRel;
    new(): SVGPathSegCurvetoQuadraticRel;
}

interface SVGPathSegCurvetoQuadraticSmoothAbs extends SVGPathSeg {
    x: number;
    y: number;
}

declare var SVGPathSegCurvetoQuadraticSmoothAbs: {
    prototype: SVGPathSegCurvetoQuadraticSmoothAbs;
    new(): SVGPathSegCurvetoQuadraticSmoothAbs;
}

interface SVGPathSegCurvetoQuadraticSmoothRel extends SVGPathSeg {
    x: number;
    y: number;
}

declare var SVGPathSegCurvetoQuadraticSmoothRel: {
    prototype: SVGPathSegCurvetoQuadraticSmoothRel;
    new(): SVGPathSegCurvetoQuadraticSmoothRel;
}

interface SVGPathSegLinetoAbs extends SVGPathSeg {
    x: number;
    y: number;
}

declare var SVGPathSegLinetoAbs: {
    prototype: SVGPathSegLinetoAbs;
    new(): SVGPathSegLinetoAbs;
}

interface SVGPathSegLinetoHorizontalAbs extends SVGPathSeg {
    x: number;
}

declare var SVGPathSegLinetoHorizontalAbs: {
    prototype: SVGPathSegLinetoHorizontalAbs;
    new(): SVGPathSegLinetoHorizontalAbs;
}

interface SVGPathSegLinetoHorizontalRel extends SVGPathSeg {
    x: number;
}

declare var SVGPathSegLinetoHorizontalRel: {
    prototype: SVGPathSegLinetoHorizontalRel;
    new(): SVGPathSegLinetoHorizontalRel;
}

interface SVGPathSegLinetoRel extends SVGPathSeg {
    x: number;
    y: number;
}

declare var SVGPathSegLinetoRel: {
    prototype: SVGPathSegLinetoRel;
    new(): SVGPathSegLinetoRel;
}

interface SVGPathSegLinetoVerticalAbs extends SVGPathSeg {
    y: number;
}

declare var SVGPathSegLinetoVerticalAbs: {
    prototype: SVGPathSegLinetoVerticalAbs;
    new(): SVGPathSegLinetoVerticalAbs;
}

interface SVGPathSegLinetoVerticalRel extends SVGPathSeg {
    y: number;
}

declare var SVGPathSegLinetoVerticalRel: {
    prototype: SVGPathSegLinetoVerticalRel;
    new(): SVGPathSegLinetoVerticalRel;
}

interface SVGPathSegList {
    numberOfItems: number;
    appendItem(newItem: SVGPathSeg): SVGPathSeg;
    clear(): void;
    getItem(index: number): SVGPathSeg;
    initialize(newItem: SVGPathSeg): SVGPathSeg;
    insertItemBefore(newItem: SVGPathSeg, index: number): SVGPathSeg;
    removeItem(index: number): SVGPathSeg;
    replaceItem(newItem: SVGPathSeg, index: number): SVGPathSeg;
}

declare var SVGPathSegList: {
    prototype: SVGPathSegList;
    new(): SVGPathSegList;
}

interface SVGPathSegMovetoAbs extends SVGPathSeg {
    x: number;
    y: number;
}

declare var SVGPathSegMovetoAbs: {
    prototype: SVGPathSegMovetoAbs;
    new(): SVGPathSegMovetoAbs;
}

interface SVGPathSegMovetoRel extends SVGPathSeg {
    x: number;
    y: number;
}

declare var SVGPathSegMovetoRel: {
    prototype: SVGPathSegMovetoRel;
    new(): SVGPathSegMovetoRel;
}

interface SVGPatternElement extends SVGElement, SVGStylable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired, SVGFitToViewBox, SVGURIReference, SVGUnitTypes {
    height: SVGAnimatedLength;
    patternContentUnits: SVGAnimatedEnumeration;
    patternTransform: SVGAnimatedTransformList;
    patternUnits: SVGAnimatedEnumeration;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    y: SVGAnimatedLength;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGPatternElement: {
    prototype: SVGPatternElement;
    new(): SVGPatternElement;
}

interface SVGPoint {
    x: number;
    y: number;
    matrixTransform(matrix: SVGMatrix): SVGPoint;
}

declare var SVGPoint: {
    prototype: SVGPoint;
    new(): SVGPoint;
}

interface SVGPointList {
    numberOfItems: number;
    appendItem(newItem: SVGPoint): SVGPoint;
    clear(): void;
    getItem(index: number): SVGPoint;
    initialize(newItem: SVGPoint): SVGPoint;
    insertItemBefore(newItem: SVGPoint, index: number): SVGPoint;
    removeItem(index: number): SVGPoint;
    replaceItem(newItem: SVGPoint, index: number): SVGPoint;
}

declare var SVGPointList: {
    prototype: SVGPointList;
    new(): SVGPointList;
}

interface SVGPolygonElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired, SVGAnimatedPoints {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGPolygonElement: {
    prototype: SVGPolygonElement;
    new(): SVGPolygonElement;
}

interface SVGPolylineElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired, SVGAnimatedPoints {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGPolylineElement: {
    prototype: SVGPolylineElement;
    new(): SVGPolylineElement;
}

interface SVGPreserveAspectRatio {
    align: number;
    meetOrSlice: number;
    SVG_MEETORSLICE_MEET: number;
    SVG_MEETORSLICE_SLICE: number;
    SVG_MEETORSLICE_UNKNOWN: number;
    SVG_PRESERVEASPECTRATIO_NONE: number;
    SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
}

declare var SVGPreserveAspectRatio: {
    prototype: SVGPreserveAspectRatio;
    new(): SVGPreserveAspectRatio;
    SVG_MEETORSLICE_MEET: number;
    SVG_MEETORSLICE_SLICE: number;
    SVG_MEETORSLICE_UNKNOWN: number;
    SVG_PRESERVEASPECTRATIO_NONE: number;
    SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
    SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
    SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
    SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
    SVG_PRESERVEASPECTRATIO_XMINYMID: number;
    SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
}

interface SVGRadialGradientElement extends SVGGradientElement {
    cx: SVGAnimatedLength;
    cy: SVGAnimatedLength;
    fx: SVGAnimatedLength;
    fy: SVGAnimatedLength;
    r: SVGAnimatedLength;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGRadialGradientElement: {
    prototype: SVGRadialGradientElement;
    new(): SVGRadialGradientElement;
}

interface SVGRect {
    height: number;
    width: number;
    x: number;
    y: number;
}

declare var SVGRect: {
    prototype: SVGRect;
    new(): SVGRect;
}

interface SVGRectElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired {
    height: SVGAnimatedLength;
    rx: SVGAnimatedLength;
    ry: SVGAnimatedLength;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    y: SVGAnimatedLength;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGRectElement: {
    prototype: SVGRectElement;
    new(): SVGRectElement;
}

interface SVGSVGElement extends SVGElement, DocumentEvent, SVGLocatable, SVGTests, SVGStylable, SVGLangSpace, SVGExternalResourcesRequired, SVGFitToViewBox, SVGZoomAndPan {
    contentScriptType: string;
    contentStyleType: string;
    currentScale: number;
    currentTranslate: SVGPoint;
    height: SVGAnimatedLength;
    onabort: (ev: Event) => any;
    onerror: (ev: Event) => any;
    onresize: (ev: UIEvent) => any;
    onscroll: (ev: UIEvent) => any;
    onunload: (ev: Event) => any;
    onzoom: (ev: SVGZoomEvent) => any;
    pixelUnitToMillimeterX: number;
    pixelUnitToMillimeterY: number;
    screenPixelToMillimeterX: number;
    screenPixelToMillimeterY: number;
    viewport: SVGRect;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    y: SVGAnimatedLength;
    checkEnclosure(element: SVGElement, rect: SVGRect): boolean;
    checkIntersection(element: SVGElement, rect: SVGRect): boolean;
    createSVGAngle(): SVGAngle;
    createSVGLength(): SVGLength;
    createSVGMatrix(): SVGMatrix;
    createSVGNumber(): SVGNumber;
    createSVGPoint(): SVGPoint;
    createSVGRect(): SVGRect;
    createSVGTransform(): SVGTransform;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
    deselectAll(): void;
    forceRedraw(): void;
    getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
    getCurrentTime(): number;
    getElementById(elementId: string): Element;
    getEnclosureList(rect: SVGRect, referenceElement: SVGElement): NodeList;
    getIntersectionList(rect: SVGRect, referenceElement: SVGElement): NodeList;
    pauseAnimations(): void;
    setCurrentTime(seconds: number): void;
    suspendRedraw(maxWaitMilliseconds: number): number;
    unpauseAnimations(): void;
    unsuspendRedraw(suspendHandleID: number): void;
    unsuspendRedrawAll(): void;
    addEventListener(type: "SVGAbort", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "SVGError", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "SVGUnload", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "SVGZoom", listener: (ev: SVGZoomEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ariarequest", listener: (ev: AriaRequestEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "command", listener: (ev: CommandEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGotPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSLostPointerCapture", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchcancel", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchend", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchmove", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "touchstart", listener: (ev: TouchEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "webkitfullscreenerror", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGSVGElement: {
    prototype: SVGSVGElement;
    new(): SVGSVGElement;
}

interface SVGScriptElement extends SVGElement, SVGExternalResourcesRequired, SVGURIReference {
    type: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGScriptElement: {
    prototype: SVGScriptElement;
    new(): SVGScriptElement;
}

interface SVGStopElement extends SVGElement, SVGStylable {
    offset: SVGAnimatedNumber;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGStopElement: {
    prototype: SVGStopElement;
    new(): SVGStopElement;
}

interface SVGStringList {
    numberOfItems: number;
    appendItem(newItem: string): string;
    clear(): void;
    getItem(index: number): string;
    initialize(newItem: string): string;
    insertItemBefore(newItem: string, index: number): string;
    removeItem(index: number): string;
    replaceItem(newItem: string, index: number): string;
}

declare var SVGStringList: {
    prototype: SVGStringList;
    new(): SVGStringList;
}

interface SVGStyleElement extends SVGElement, SVGLangSpace {
    media: string;
    title: string;
    type: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGStyleElement: {
    prototype: SVGStyleElement;
    new(): SVGStyleElement;
}

interface SVGSwitchElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGSwitchElement: {
    prototype: SVGSwitchElement;
    new(): SVGSwitchElement;
}

interface SVGSymbolElement extends SVGElement, SVGStylable, SVGLangSpace, SVGExternalResourcesRequired, SVGFitToViewBox {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGSymbolElement: {
    prototype: SVGSymbolElement;
    new(): SVGSymbolElement;
}

interface SVGTSpanElement extends SVGTextPositioningElement {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGTSpanElement: {
    prototype: SVGTSpanElement;
    new(): SVGTSpanElement;
}

interface SVGTextContentElement extends SVGElement, SVGStylable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired {
    lengthAdjust: SVGAnimatedEnumeration;
    textLength: SVGAnimatedLength;
    getCharNumAtPosition(point: SVGPoint): number;
    getComputedTextLength(): number;
    getEndPositionOfChar(charnum: number): SVGPoint;
    getExtentOfChar(charnum: number): SVGRect;
    getNumberOfChars(): number;
    getRotationOfChar(charnum: number): number;
    getStartPositionOfChar(charnum: number): SVGPoint;
    getSubStringLength(charnum: number, nchars: number): number;
    selectSubString(charnum: number, nchars: number): void;
    LENGTHADJUST_SPACING: number;
    LENGTHADJUST_SPACINGANDGLYPHS: number;
    LENGTHADJUST_UNKNOWN: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGTextContentElement: {
    prototype: SVGTextContentElement;
    new(): SVGTextContentElement;
    LENGTHADJUST_SPACING: number;
    LENGTHADJUST_SPACINGANDGLYPHS: number;
    LENGTHADJUST_UNKNOWN: number;
}

interface SVGTextElement extends SVGTextPositioningElement, SVGTransformable {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGTextElement: {
    prototype: SVGTextElement;
    new(): SVGTextElement;
}

interface SVGTextPathElement extends SVGTextContentElement, SVGURIReference {
    method: SVGAnimatedEnumeration;
    spacing: SVGAnimatedEnumeration;
    startOffset: SVGAnimatedLength;
    TEXTPATH_METHODTYPE_ALIGN: number;
    TEXTPATH_METHODTYPE_STRETCH: number;
    TEXTPATH_METHODTYPE_UNKNOWN: number;
    TEXTPATH_SPACINGTYPE_AUTO: number;
    TEXTPATH_SPACINGTYPE_EXACT: number;
    TEXTPATH_SPACINGTYPE_UNKNOWN: number;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGTextPathElement: {
    prototype: SVGTextPathElement;
    new(): SVGTextPathElement;
    TEXTPATH_METHODTYPE_ALIGN: number;
    TEXTPATH_METHODTYPE_STRETCH: number;
    TEXTPATH_METHODTYPE_UNKNOWN: number;
    TEXTPATH_SPACINGTYPE_AUTO: number;
    TEXTPATH_SPACINGTYPE_EXACT: number;
    TEXTPATH_SPACINGTYPE_UNKNOWN: number;
}

interface SVGTextPositioningElement extends SVGTextContentElement {
    dx: SVGAnimatedLengthList;
    dy: SVGAnimatedLengthList;
    rotate: SVGAnimatedNumberList;
    x: SVGAnimatedLengthList;
    y: SVGAnimatedLengthList;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGTextPositioningElement: {
    prototype: SVGTextPositioningElement;
    new(): SVGTextPositioningElement;
}

interface SVGTitleElement extends SVGElement, SVGStylable, SVGLangSpace {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGTitleElement: {
    prototype: SVGTitleElement;
    new(): SVGTitleElement;
}

interface SVGTransform {
    angle: number;
    matrix: SVGMatrix;
    type: number;
    setMatrix(matrix: SVGMatrix): void;
    setRotate(angle: number, cx: number, cy: number): void;
    setScale(sx: number, sy: number): void;
    setSkewX(angle: number): void;
    setSkewY(angle: number): void;
    setTranslate(tx: number, ty: number): void;
    SVG_TRANSFORM_MATRIX: number;
    SVG_TRANSFORM_ROTATE: number;
    SVG_TRANSFORM_SCALE: number;
    SVG_TRANSFORM_SKEWX: number;
    SVG_TRANSFORM_SKEWY: number;
    SVG_TRANSFORM_TRANSLATE: number;
    SVG_TRANSFORM_UNKNOWN: number;
}

declare var SVGTransform: {
    prototype: SVGTransform;
    new(): SVGTransform;
    SVG_TRANSFORM_MATRIX: number;
    SVG_TRANSFORM_ROTATE: number;
    SVG_TRANSFORM_SCALE: number;
    SVG_TRANSFORM_SKEWX: number;
    SVG_TRANSFORM_SKEWY: number;
    SVG_TRANSFORM_TRANSLATE: number;
    SVG_TRANSFORM_UNKNOWN: number;
}

interface SVGTransformList {
    numberOfItems: number;
    appendItem(newItem: SVGTransform): SVGTransform;
    clear(): void;
    consolidate(): SVGTransform;
    createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
    getItem(index: number): SVGTransform;
    initialize(newItem: SVGTransform): SVGTransform;
    insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
    removeItem(index: number): SVGTransform;
    replaceItem(newItem: SVGTransform, index: number): SVGTransform;
}

declare var SVGTransformList: {
    prototype: SVGTransformList;
    new(): SVGTransformList;
}

interface SVGUnitTypes {
    SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
    SVG_UNIT_TYPE_UNKNOWN: number;
    SVG_UNIT_TYPE_USERSPACEONUSE: number;
}
declare var SVGUnitTypes: SVGUnitTypes;

interface SVGUseElement extends SVGElement, SVGStylable, SVGTransformable, SVGTests, SVGLangSpace, SVGExternalResourcesRequired, SVGURIReference {
    animatedInstanceRoot: SVGElementInstance;
    height: SVGAnimatedLength;
    instanceRoot: SVGElementInstance;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    y: SVGAnimatedLength;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGUseElement: {
    prototype: SVGUseElement;
    new(): SVGUseElement;
}

interface SVGViewElement extends SVGElement, SVGExternalResourcesRequired, SVGFitToViewBox, SVGZoomAndPan {
    viewTarget: SVGStringList;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var SVGViewElement: {
    prototype: SVGViewElement;
    new(): SVGViewElement;
}

interface SVGZoomAndPan {
    SVG_ZOOMANDPAN_DISABLE: number;
    SVG_ZOOMANDPAN_MAGNIFY: number;
    SVG_ZOOMANDPAN_UNKNOWN: number;
}
declare var SVGZoomAndPan: SVGZoomAndPan;

interface SVGZoomEvent extends UIEvent {
    newScale: number;
    newTranslate: SVGPoint;
    previousScale: number;
    previousTranslate: SVGPoint;
    zoomRectScreen: SVGRect;
}

declare var SVGZoomEvent: {
    prototype: SVGZoomEvent;
    new(): SVGZoomEvent;
}

interface Screen extends EventTarget {
    availHeight: number;
    availWidth: number;
    bufferDepth: number;
    colorDepth: number;
    deviceXDPI: number;
    deviceYDPI: number;
    fontSmoothingEnabled: boolean;
    height: number;
    logicalXDPI: number;
    logicalYDPI: number;
    msOrientation: string;
    onmsorientationchange: (ev: Event) => any;
    pixelDepth: number;
    systemXDPI: number;
    systemYDPI: number;
    width: number;
    msLockOrientation(orientations: string): boolean;
    msLockOrientation(orientations: string[]): boolean;
    msUnlockOrientation(): void;
    addEventListener(type: "MSOrientationChange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var Screen: {
    prototype: Screen;
    new(): Screen;
}

interface ScriptNotifyEvent extends Event {
    callingUri: string;
    value: string;
}

declare var ScriptNotifyEvent: {
    prototype: ScriptNotifyEvent;
    new(): ScriptNotifyEvent;
}

interface ScriptProcessorNode extends AudioNode {
    bufferSize: number;
    onaudioprocess: (ev: AudioProcessingEvent) => any;
    addEventListener(type: "audioprocess", listener: (ev: AudioProcessingEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var ScriptProcessorNode: {
    prototype: ScriptProcessorNode;
    new(): ScriptProcessorNode;
}

interface Selection {
    anchorNode: Node;
    anchorOffset: number;
    focusNode: Node;
    focusOffset: number;
    isCollapsed: boolean;
    rangeCount: number;
    type: string;
    addRange(range: Range): void;
    collapse(parentNode: Node, offset: number): void;
    collapseToEnd(): void;
    collapseToStart(): void;
    containsNode(node: Node, partlyContained: boolean): boolean;
    deleteFromDocument(): void;
    empty(): void;
    extend(newNode: Node, offset: number): void;
    getRangeAt(index: number): Range;
    removeAllRanges(): void;
    removeRange(range: Range): void;
    selectAllChildren(parentNode: Node): void;
    setBaseAndExtent(baseNode: Node, baseOffset: number, extentNode: Node, extentOffset: number): void;
    toString(): string;
}

declare var Selection: {
    prototype: Selection;
    new(): Selection;
}

interface SourceBuffer extends EventTarget {
    appendWindowEnd: number;
    appendWindowStart: number;
    audioTracks: AudioTrackList;
    buffered: TimeRanges;
    mode: string;
    timestampOffset: number;
    updating: boolean;
    videoTracks: VideoTrackList;
    abort(): void;
    appendBuffer(data: any): void;
    appendBuffer(data: any): void;
    appendStream(stream: MSStream, maxSize?: number): void;
    remove(start: number, end: number): void;
}

declare var SourceBuffer: {
    prototype: SourceBuffer;
    new(): SourceBuffer;
}

interface SourceBufferList extends EventTarget {
    length: number;
    item(index: number): SourceBuffer;
    [index: number]: SourceBuffer;
}

declare var SourceBufferList: {
    prototype: SourceBufferList;
    new(): SourceBufferList;
}

interface StereoPannerNode extends AudioNode {
    pan: AudioParam;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var StereoPannerNode: {
    prototype: StereoPannerNode;
    new(): StereoPannerNode;
}

interface Storage {
    length: number;
    clear(): void;
    getItem(key: string): any;
    key(index: number): string;
    removeItem(key: string): void;
    setItem(key: string, data: string): void;
    [key: string]: any;
    [index: number]: string;
}

declare var Storage: {
    prototype: Storage;
    new(): Storage;
}

interface StorageEvent extends Event {
    key: string;
    newValue: any;
    oldValue: any;
    storageArea: Storage;
    url: string;
    initStorageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, keyArg: string, oldValueArg: any, newValueArg: any, urlArg: string, storageAreaArg: Storage): void;
}

declare var StorageEvent: {
    prototype: StorageEvent;
    new(): StorageEvent;
}

interface StyleMedia {
    type: string;
    matchMedium(mediaquery: string): boolean;
}

declare var StyleMedia: {
    prototype: StyleMedia;
    new(): StyleMedia;
}

interface StyleSheet {
    disabled: boolean;
    href: string;
    media: MediaList;
    ownerNode: Node;
    parentStyleSheet: StyleSheet;
    title: string;
    type: string;
}

declare var StyleSheet: {
    prototype: StyleSheet;
    new(): StyleSheet;
}

interface StyleSheetList {
    length: number;
    item(index?: number): StyleSheet;
    [index: number]: StyleSheet;
}

declare var StyleSheetList: {
    prototype: StyleSheetList;
    new(): StyleSheetList;
}

interface StyleSheetPageList {
    length: number;
    item(index: number): CSSPageRule;
    [index: number]: CSSPageRule;
}

declare var StyleSheetPageList: {
    prototype: StyleSheetPageList;
    new(): StyleSheetPageList;
}

interface SubtleCrypto {
    decrypt(algorithm: string, key: CryptoKey, data: any): any;
    decrypt(algorithm: Algorithm, key: CryptoKey, data: any): any;
    deriveBits(algorithm: string, baseKey: CryptoKey, length: number): any;
    deriveBits(algorithm: Algorithm, baseKey: CryptoKey, length: number): any;
    deriveKey(algorithm: string, baseKey: CryptoKey, derivedKeyType: string, extractable: boolean, keyUsages: string[]): any;
    deriveKey(algorithm: string, baseKey: CryptoKey, derivedKeyType: Algorithm, extractable: boolean, keyUsages: string[]): any;
    deriveKey(algorithm: Algorithm, baseKey: CryptoKey, derivedKeyType: string, extractable: boolean, keyUsages: string[]): any;
    deriveKey(algorithm: Algorithm, baseKey: CryptoKey, derivedKeyType: Algorithm, extractable: boolean, keyUsages: string[]): any;
    digest(algorithm: string, data: any): any;
    digest(algorithm: Algorithm, data: any): any;
    encrypt(algorithm: string, key: CryptoKey, data: any): any;
    encrypt(algorithm: Algorithm, key: CryptoKey, data: any): any;
    exportKey(format: string, key: CryptoKey): any;
    generateKey(algorithm: string, extractable: boolean, keyUsages: string[]): any;
    generateKey(algorithm: Algorithm, extractable: boolean, keyUsages: string[]): any;
    importKey(format: string, keyData: any, algorithm: string, extractable: boolean, keyUsages: string[]): any;
    importKey(format: string, keyData: any, algorithm: Algorithm, extractable: boolean, keyUsages: string[]): any;
    sign(algorithm: string, key: CryptoKey, data: any): any;
    sign(algorithm: Algorithm, key: CryptoKey, data: any): any;
    unwrapKey(format: string, wrappedKey: any, unwrappingKey: CryptoKey, unwrapAlgorithm: string, unwrappedKeyAlgorithm: string, extractable: boolean, keyUsages: string[]): any;
    unwrapKey(format: string, wrappedKey: any, unwrappingKey: CryptoKey, unwrapAlgorithm: string, unwrappedKeyAlgorithm: Algorithm, extractable: boolean, keyUsages: string[]): any;
    unwrapKey(format: string, wrappedKey: any, unwrappingKey: CryptoKey, unwrapAlgorithm: Algorithm, unwrappedKeyAlgorithm: string, extractable: boolean, keyUsages: string[]): any;
    unwrapKey(format: string, wrappedKey: any, unwrappingKey: CryptoKey, unwrapAlgorithm: Algorithm, unwrappedKeyAlgorithm: Algorithm, extractable: boolean, keyUsages: string[]): any;
    verify(algorithm: string, key: CryptoKey, signature: any, data: any): any;
    verify(algorithm: Algorithm, key: CryptoKey, signature: any, data: any): any;
    wrapKey(format: string, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: string): any;
    wrapKey(format: string, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: Algorithm): any;
}

declare var SubtleCrypto: {
    prototype: SubtleCrypto;
    new(): SubtleCrypto;
}

interface Text extends CharacterData {
    wholeText: string;
    replaceWholeText(content: string): Text;
    splitText(offset: number): Text;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var Text: {
    prototype: Text;
    new(): Text;
}

interface TextEvent extends UIEvent {
    data: string;
    inputMethod: number;
    locale: string;
    initTextEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, inputMethod: number, locale: string): void;
    DOM_INPUT_METHOD_DROP: number;
    DOM_INPUT_METHOD_HANDWRITING: number;
    DOM_INPUT_METHOD_IME: number;
    DOM_INPUT_METHOD_KEYBOARD: number;
    DOM_INPUT_METHOD_MULTIMODAL: number;
    DOM_INPUT_METHOD_OPTION: number;
    DOM_INPUT_METHOD_PASTE: number;
    DOM_INPUT_METHOD_SCRIPT: number;
    DOM_INPUT_METHOD_UNKNOWN: number;
    DOM_INPUT_METHOD_VOICE: number;
}

declare var TextEvent: {
    prototype: TextEvent;
    new(): TextEvent;
    DOM_INPUT_METHOD_DROP: number;
    DOM_INPUT_METHOD_HANDWRITING: number;
    DOM_INPUT_METHOD_IME: number;
    DOM_INPUT_METHOD_KEYBOARD: number;
    DOM_INPUT_METHOD_MULTIMODAL: number;
    DOM_INPUT_METHOD_OPTION: number;
    DOM_INPUT_METHOD_PASTE: number;
    DOM_INPUT_METHOD_SCRIPT: number;
    DOM_INPUT_METHOD_UNKNOWN: number;
    DOM_INPUT_METHOD_VOICE: number;
}

interface TextMetrics {
    width: number;
}

declare var TextMetrics: {
    prototype: TextMetrics;
    new(): TextMetrics;
}

interface TextRange {
    boundingHeight: number;
    boundingLeft: number;
    boundingTop: number;
    boundingWidth: number;
    htmlText: string;
    offsetLeft: number;
    offsetTop: number;
    text: string;
    collapse(start?: boolean): void;
    compareEndPoints(how: string, sourceRange: TextRange): number;
    duplicate(): TextRange;
    execCommand(cmdID: string, showUI?: boolean, value?: any): boolean;
    execCommandShowHelp(cmdID: string): boolean;
    expand(Unit: string): boolean;
    findText(string: string, count?: number, flags?: number): boolean;
    getBookmark(): string;
    getBoundingClientRect(): ClientRect;
    getClientRects(): ClientRectList;
    inRange(range: TextRange): boolean;
    isEqual(range: TextRange): boolean;
    move(unit: string, count?: number): number;
    moveEnd(unit: string, count?: number): number;
    moveStart(unit: string, count?: number): number;
    moveToBookmark(bookmark: string): boolean;
    moveToElementText(element: Element): void;
    moveToPoint(x: number, y: number): void;
    parentElement(): Element;
    pasteHTML(html: string): void;
    queryCommandEnabled(cmdID: string): boolean;
    queryCommandIndeterm(cmdID: string): boolean;
    queryCommandState(cmdID: string): boolean;
    queryCommandSupported(cmdID: string): boolean;
    queryCommandText(cmdID: string): string;
    queryCommandValue(cmdID: string): any;
    scrollIntoView(fStart?: boolean): void;
    select(): void;
    setEndPoint(how: string, SourceRange: TextRange): void;
}

declare var TextRange: {
    prototype: TextRange;
    new(): TextRange;
}

interface TextRangeCollection {
    length: number;
    item(index: number): TextRange;
    [index: number]: TextRange;
}

declare var TextRangeCollection: {
    prototype: TextRangeCollection;
    new(): TextRangeCollection;
}

interface TextTrack extends EventTarget {
    activeCues: TextTrackCueList;
    cues: TextTrackCueList;
    inBandMetadataTrackDispatchType: string;
    kind: string;
    label: string;
    language: string;
    mode: any | number;
    oncuechange: (ev: Event) => any;
    onerror: (ev: Event) => any;
    onload: (ev: Event) => any;
    readyState: number;
    addCue(cue: TextTrackCue): void;
    removeCue(cue: TextTrackCue): void;
    DISABLED: number;
    ERROR: number;
    HIDDEN: number;
    LOADED: number;
    LOADING: number;
    NONE: number;
    SHOWING: number;
    addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var TextTrack: {
    prototype: TextTrack;
    new(): TextTrack;
    DISABLED: number;
    ERROR: number;
    HIDDEN: number;
    LOADED: number;
    LOADING: number;
    NONE: number;
    SHOWING: number;
}

interface TextTrackCue extends EventTarget {
    endTime: number;
    id: string;
    onenter: (ev: Event) => any;
    onexit: (ev: Event) => any;
    pauseOnExit: boolean;
    startTime: number;
    text: string;
    track: TextTrack;
    getCueAsHTML(): DocumentFragment;
    addEventListener(type: "enter", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "exit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var TextTrackCue: {
    prototype: TextTrackCue;
    new(startTime: number, endTime: number, text: string): TextTrackCue;
}

interface TextTrackCueList {
    length: number;
    getCueById(id: string): TextTrackCue;
    item(index: number): TextTrackCue;
    [index: number]: TextTrackCue;
}

declare var TextTrackCueList: {
    prototype: TextTrackCueList;
    new(): TextTrackCueList;
}

interface TextTrackList extends EventTarget {
    length: number;
    onaddtrack: (ev: TrackEvent) => any;
    item(index: number): TextTrack;
    addEventListener(type: "addtrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
    [index: number]: TextTrack;
}

declare var TextTrackList: {
    prototype: TextTrackList;
    new(): TextTrackList;
}

interface TimeRanges {
    length: number;
    end(index: number): number;
    start(index: number): number;
}

declare var TimeRanges: {
    prototype: TimeRanges;
    new(): TimeRanges;
}

interface Touch {
    clientX: number;
    clientY: number;
    identifier: number;
    pageX: number;
    pageY: number;
    screenX: number;
    screenY: number;
    target: EventTarget;
}

declare var Touch: {
    prototype: Touch;
    new(): Touch;
}

interface TouchEvent extends UIEvent {
    altKey: boolean;
    changedTouches: TouchList;
    ctrlKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
    targetTouches: TouchList;
    touches: TouchList;
}

declare var TouchEvent: {
    prototype: TouchEvent;
    new(): TouchEvent;
}

interface TouchList {
    length: number;
    item(index: number): Touch;
    [index: number]: Touch;
}

declare var TouchList: {
    prototype: TouchList;
    new(): TouchList;
}

interface TrackEvent extends Event {
    track: any;
}

declare var TrackEvent: {
    prototype: TrackEvent;
    new(): TrackEvent;
}

interface TransitionEvent extends Event {
    elapsedTime: number;
    propertyName: string;
    initTransitionEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, propertyNameArg: string, elapsedTimeArg: number): void;
}

declare var TransitionEvent: {
    prototype: TransitionEvent;
    new(): TransitionEvent;
}

interface TreeWalker {
    currentNode: Node;
    expandEntityReferences: boolean;
    filter: NodeFilter;
    root: Node;
    whatToShow: number;
    firstChild(): Node;
    lastChild(): Node;
    nextNode(): Node;
    nextSibling(): Node;
    parentNode(): Node;
    previousNode(): Node;
    previousSibling(): Node;
}

declare var TreeWalker: {
    prototype: TreeWalker;
    new(): TreeWalker;
}

interface UIEvent extends Event {
    detail: number;
    view: Window;
    initUIEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number): void;
}

declare var UIEvent: {
    prototype: UIEvent;
    new(type: string, eventInitDict?: UIEventInit): UIEvent;
}

interface URL {
    createObjectURL(object: any, options?: ObjectURLOptions): string;
    revokeObjectURL(url: string): void;
}
declare var URL: URL;

interface UnviewableContentIdentifiedEvent extends NavigationEventWithReferrer {
    mediaType: string;
}

declare var UnviewableContentIdentifiedEvent: {
    prototype: UnviewableContentIdentifiedEvent;
    new(): UnviewableContentIdentifiedEvent;
}

interface ValidityState {
    badInput: boolean;
    customError: boolean;
    patternMismatch: boolean;
    rangeOverflow: boolean;
    rangeUnderflow: boolean;
    stepMismatch: boolean;
    tooLong: boolean;
    typeMismatch: boolean;
    valid: boolean;
    valueMissing: boolean;
}

declare var ValidityState: {
    prototype: ValidityState;
    new(): ValidityState;
}

interface VideoPlaybackQuality {
    corruptedVideoFrames: number;
    creationTime: number;
    droppedVideoFrames: number;
    totalFrameDelay: number;
    totalVideoFrames: number;
}

declare var VideoPlaybackQuality: {
    prototype: VideoPlaybackQuality;
    new(): VideoPlaybackQuality;
}

interface VideoTrack {
    id: string;
    kind: string;
    label: string;
    language: string;
    selected: boolean;
    sourceBuffer: SourceBuffer;
}

declare var VideoTrack: {
    prototype: VideoTrack;
    new(): VideoTrack;
}

interface VideoTrackList extends EventTarget {
    length: number;
    onaddtrack: (ev: TrackEvent) => any;
    onchange: (ev: Event) => any;
    onremovetrack: (ev: TrackEvent) => any;
    selectedIndex: number;
    getTrackById(id: string): VideoTrack;
    item(index: number): VideoTrack;
    addEventListener(type: "addtrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "removetrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
    [index: number]: VideoTrack;
}

declare var VideoTrackList: {
    prototype: VideoTrackList;
    new(): VideoTrackList;
}

interface WEBGL_compressed_texture_s3tc {
    COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
    COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
    COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
    COMPRESSED_RGB_S3TC_DXT1_EXT: number;
}

declare var WEBGL_compressed_texture_s3tc: {
    prototype: WEBGL_compressed_texture_s3tc;
    new(): WEBGL_compressed_texture_s3tc;
    COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
    COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
    COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
    COMPRESSED_RGB_S3TC_DXT1_EXT: number;
}

interface WEBGL_debug_renderer_info {
    UNMASKED_RENDERER_WEBGL: number;
    UNMASKED_VENDOR_WEBGL: number;
}

declare var WEBGL_debug_renderer_info: {
    prototype: WEBGL_debug_renderer_info;
    new(): WEBGL_debug_renderer_info;
    UNMASKED_RENDERER_WEBGL: number;
    UNMASKED_VENDOR_WEBGL: number;
}

interface WEBGL_depth_texture {
    UNSIGNED_INT_24_8_WEBGL: number;
}

declare var WEBGL_depth_texture: {
    prototype: WEBGL_depth_texture;
    new(): WEBGL_depth_texture;
    UNSIGNED_INT_24_8_WEBGL: number;
}

interface WaveShaperNode extends AudioNode {
    curve: any;
    oversample: string;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var WaveShaperNode: {
    prototype: WaveShaperNode;
    new(): WaveShaperNode;
}

interface WebGLActiveInfo {
    name: string;
    size: number;
    type: number;
}

declare var WebGLActiveInfo: {
    prototype: WebGLActiveInfo;
    new(): WebGLActiveInfo;
}

interface WebGLBuffer extends WebGLObject {
}

declare var WebGLBuffer: {
    prototype: WebGLBuffer;
    new(): WebGLBuffer;
}

interface WebGLContextEvent extends Event {
    statusMessage: string;
}

declare var WebGLContextEvent: {
    prototype: WebGLContextEvent;
    new(): WebGLContextEvent;
}

interface WebGLFramebuffer extends WebGLObject {
}

declare var WebGLFramebuffer: {
    prototype: WebGLFramebuffer;
    new(): WebGLFramebuffer;
}

interface WebGLObject {
}

declare var WebGLObject: {
    prototype: WebGLObject;
    new(): WebGLObject;
}

interface WebGLProgram extends WebGLObject {
}

declare var WebGLProgram: {
    prototype: WebGLProgram;
    new(): WebGLProgram;
}

interface WebGLRenderbuffer extends WebGLObject {
}

declare var WebGLRenderbuffer: {
    prototype: WebGLRenderbuffer;
    new(): WebGLRenderbuffer;
}

interface WebGLRenderingContext {
    canvas: HTMLCanvasElement;
    drawingBufferHeight: number;
    drawingBufferWidth: number;
    activeTexture(texture: number): void;
    attachShader(program: WebGLProgram, shader: WebGLShader): void;
    bindAttribLocation(program: WebGLProgram, index: number, name: string): void;
    bindBuffer(target: number, buffer: WebGLBuffer): void;
    bindFramebuffer(target: number, framebuffer: WebGLFramebuffer): void;
    bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer): void;
    bindTexture(target: number, texture: WebGLTexture): void;
    blendColor(red: number, green: number, blue: number, alpha: number): void;
    blendEquation(mode: number): void;
    blendEquationSeparate(modeRGB: number, modeAlpha: number): void;
    blendFunc(sfactor: number, dfactor: number): void;
    blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void;
    bufferData(target: number, size: number, usage: number): void;
    bufferData(target: number, size: any, usage: number): void;
    bufferData(target: number, size: any, usage: number): void;
    bufferSubData(target: number, offset: number, data: any): void;
    bufferSubData(target: number, offset: number, data: any): void;
    checkFramebufferStatus(target: number): number;
    clear(mask: number): void;
    clearColor(red: number, green: number, blue: number, alpha: number): void;
    clearDepth(depth: number): void;
    clearStencil(s: number): void;
    colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
    compileShader(shader: WebGLShader): void;
    compressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, data: any): void;
    compressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, data: any): void;
    copyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number): void;
    copyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number): void;
    createBuffer(): WebGLBuffer;
    createFramebuffer(): WebGLFramebuffer;
    createProgram(): WebGLProgram;
    createRenderbuffer(): WebGLRenderbuffer;
    createShader(type: number): WebGLShader;
    createTexture(): WebGLTexture;
    cullFace(mode: number): void;
    deleteBuffer(buffer: WebGLBuffer): void;
    deleteFramebuffer(framebuffer: WebGLFramebuffer): void;
    deleteProgram(program: WebGLProgram): void;
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer): void;
    deleteShader(shader: WebGLShader): void;
    deleteTexture(texture: WebGLTexture): void;
    depthFunc(func: number): void;
    depthMask(flag: boolean): void;
    depthRange(zNear: number, zFar: number): void;
    detachShader(program: WebGLProgram, shader: WebGLShader): void;
    disable(cap: number): void;
    disableVertexAttribArray(index: number): void;
    drawArrays(mode: number, first: number, count: number): void;
    drawElements(mode: number, count: number, type: number, offset: number): void;
    enable(cap: number): void;
    enableVertexAttribArray(index: number): void;
    finish(): void;
    flush(): void;
    framebufferRenderbuffer(target: number, attachment: number, renderbuffertarget: number, renderbuffer: WebGLRenderbuffer): void;
    framebufferTexture2D(target: number, attachment: number, textarget: number, texture: WebGLTexture, level: number): void;
    frontFace(mode: number): void;
    generateMipmap(target: number): void;
    getActiveAttrib(program: WebGLProgram, index: number): WebGLActiveInfo;
    getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo;
    getAttachedShaders(program: WebGLProgram): WebGLShader[];
    getAttribLocation(program: WebGLProgram, name: string): number;
    getBufferParameter(target: number, pname: number): any;
    getContextAttributes(): WebGLContextAttributes;
    getError(): number;
    getExtension(name: string): any;
    getFramebufferAttachmentParameter(target: number, attachment: number, pname: number): any;
    getParameter(pname: number): any;
    getProgramInfoLog(program: WebGLProgram): string;
    getProgramParameter(program: WebGLProgram, pname: number): any;
    getRenderbufferParameter(target: number, pname: number): any;
    getShaderInfoLog(shader: WebGLShader): string;
    getShaderParameter(shader: WebGLShader, pname: number): any;
    getShaderPrecisionFormat(shadertype: number, precisiontype: number): WebGLShaderPrecisionFormat;
    getShaderSource(shader: WebGLShader): string;
    getSupportedExtensions(): string[];
    getTexParameter(target: number, pname: number): any;
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;
    getVertexAttrib(index: number, pname: number): any;
    getVertexAttribOffset(index: number, pname: number): number;
    hint(target: number, mode: number): void;
    isBuffer(buffer: WebGLBuffer): boolean;
    isContextLost(): boolean;
    isEnabled(cap: number): boolean;
    isFramebuffer(framebuffer: WebGLFramebuffer): boolean;
    isProgram(program: WebGLProgram): boolean;
    isRenderbuffer(renderbuffer: WebGLRenderbuffer): boolean;
    isShader(shader: WebGLShader): boolean;
    isTexture(texture: WebGLTexture): boolean;
    lineWidth(width: number): void;
    linkProgram(program: WebGLProgram): void;
    pixelStorei(pname: number, param: number): void;
    polygonOffset(factor: number, units: number): void;
    readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: any): void;
    renderbufferStorage(target: number, internalformat: number, width: number, height: number): void;
    sampleCoverage(value: number, invert: boolean): void;
    scissor(x: number, y: number, width: number, height: number): void;
    shaderSource(shader: WebGLShader, source: string): void;
    stencilFunc(func: number, ref: number, mask: number): void;
    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void;
    stencilMask(mask: number): void;
    stencilMaskSeparate(face: number, mask: number): void;
    stencilOp(fail: number, zfail: number, zpass: number): void;
    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void;
    texImage2D(target: number, level: number, internalformat: number, format: number, type: number, pixels: ImageData): void;
    texParameterf(target: number, pname: number, param: number): void;
    texParameteri(target: number, pname: number, param: number): void;
    texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, pixels: ImageData): void;
    uniform1f(location: WebGLUniformLocation, x: number): void;
    uniform1fv(location: WebGLUniformLocation, v: any): void;
    uniform1i(location: WebGLUniformLocation, x: number): void;
    uniform1iv(location: WebGLUniformLocation, v: any): void;
    uniform2f(location: WebGLUniformLocation, x: number, y: number): void;
    uniform2fv(location: WebGLUniformLocation, v: any): void;
    uniform2i(location: WebGLUniformLocation, x: number, y: number): void;
    uniform2iv(location: WebGLUniformLocation, v: any): void;
    uniform3f(location: WebGLUniformLocation, x: number, y: number, z: number): void;
    uniform3fv(location: WebGLUniformLocation, v: any): void;
    uniform3i(location: WebGLUniformLocation, x: number, y: number, z: number): void;
    uniform3iv(location: WebGLUniformLocation, v: any): void;
    uniform4f(location: WebGLUniformLocation, x: number, y: number, z: number, w: number): void;
    uniform4fv(location: WebGLUniformLocation, v: any): void;
    uniform4i(location: WebGLUniformLocation, x: number, y: number, z: number, w: number): void;
    uniform4iv(location: WebGLUniformLocation, v: any): void;
    uniformMatrix2fv(location: WebGLUniformLocation, transpose: boolean, value: any): void;
    uniformMatrix3fv(location: WebGLUniformLocation, transpose: boolean, value: any): void;
    uniformMatrix4fv(location: WebGLUniformLocation, transpose: boolean, value: any): void;
    useProgram(program: WebGLProgram): void;
    validateProgram(program: WebGLProgram): void;
    vertexAttrib1f(indx: number, x: number): void;
    vertexAttrib1fv(indx: number, values: any): void;
    vertexAttrib2f(indx: number, x: number, y: number): void;
    vertexAttrib2fv(indx: number, values: any): void;
    vertexAttrib3f(indx: number, x: number, y: number, z: number): void;
    vertexAttrib3fv(indx: number, values: any): void;
    vertexAttrib4f(indx: number, x: number, y: number, z: number, w: number): void;
    vertexAttrib4fv(indx: number, values: any): void;
    vertexAttribPointer(indx: number, size: number, type: number, normalized: boolean, stride: number, offset: number): void;
    viewport(x: number, y: number, width: number, height: number): void;
    ACTIVE_ATTRIBUTES: number;
    ACTIVE_TEXTURE: number;
    ACTIVE_UNIFORMS: number;
    ALIASED_LINE_WIDTH_RANGE: number;
    ALIASED_POINT_SIZE_RANGE: number;
    ALPHA: number;
    ALPHA_BITS: number;
    ALWAYS: number;
    ARRAY_BUFFER: number;
    ARRAY_BUFFER_BINDING: number;
    ATTACHED_SHADERS: number;
    BACK: number;
    BLEND: number;
    BLEND_COLOR: number;
    BLEND_DST_ALPHA: number;
    BLEND_DST_RGB: number;
    BLEND_EQUATION: number;
    BLEND_EQUATION_ALPHA: number;
    BLEND_EQUATION_RGB: number;
    BLEND_SRC_ALPHA: number;
    BLEND_SRC_RGB: number;
    BLUE_BITS: number;
    BOOL: number;
    BOOL_VEC2: number;
    BOOL_VEC3: number;
    BOOL_VEC4: number;
    BROWSER_DEFAULT_WEBGL: number;
    BUFFER_SIZE: number;
    BUFFER_USAGE: number;
    BYTE: number;
    CCW: number;
    CLAMP_TO_EDGE: number;
    COLOR_ATTACHMENT0: number;
    COLOR_BUFFER_BIT: number;
    COLOR_CLEAR_VALUE: number;
    COLOR_WRITEMASK: number;
    COMPILE_STATUS: number;
    COMPRESSED_TEXTURE_FORMATS: number;
    CONSTANT_ALPHA: number;
    CONSTANT_COLOR: number;
    CONTEXT_LOST_WEBGL: number;
    CULL_FACE: number;
    CULL_FACE_MODE: number;
    CURRENT_PROGRAM: number;
    CURRENT_VERTEX_ATTRIB: number;
    CW: number;
    DECR: number;
    DECR_WRAP: number;
    DELETE_STATUS: number;
    DEPTH_ATTACHMENT: number;
    DEPTH_BITS: number;
    DEPTH_BUFFER_BIT: number;
    DEPTH_CLEAR_VALUE: number;
    DEPTH_COMPONENT: number;
    DEPTH_COMPONENT16: number;
    DEPTH_FUNC: number;
    DEPTH_RANGE: number;
    DEPTH_STENCIL: number;
    DEPTH_STENCIL_ATTACHMENT: number;
    DEPTH_TEST: number;
    DEPTH_WRITEMASK: number;
    DITHER: number;
    DONT_CARE: number;
    DST_ALPHA: number;
    DST_COLOR: number;
    DYNAMIC_DRAW: number;
    ELEMENT_ARRAY_BUFFER: number;
    ELEMENT_ARRAY_BUFFER_BINDING: number;
    EQUAL: number;
    FASTEST: number;
    FLOAT: number;
    FLOAT_MAT2: number;
    FLOAT_MAT3: number;
    FLOAT_MAT4: number;
    FLOAT_VEC2: number;
    FLOAT_VEC3: number;
    FLOAT_VEC4: number;
    FRAGMENT_SHADER: number;
    FRAMEBUFFER: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
    FRAMEBUFFER_BINDING: number;
    FRAMEBUFFER_COMPLETE: number;
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
    FRAMEBUFFER_UNSUPPORTED: number;
    FRONT: number;
    FRONT_AND_BACK: number;
    FRONT_FACE: number;
    FUNC_ADD: number;
    FUNC_REVERSE_SUBTRACT: number;
    FUNC_SUBTRACT: number;
    GENERATE_MIPMAP_HINT: number;
    GEQUAL: number;
    GREATER: number;
    GREEN_BITS: number;
    HIGH_FLOAT: number;
    HIGH_INT: number;
    IMPLEMENTATION_COLOR_READ_FORMAT: number;
    IMPLEMENTATION_COLOR_READ_TYPE: number;
    INCR: number;
    INCR_WRAP: number;
    INT: number;
    INT_VEC2: number;
    INT_VEC3: number;
    INT_VEC4: number;
    INVALID_ENUM: number;
    INVALID_FRAMEBUFFER_OPERATION: number;
    INVALID_OPERATION: number;
    INVALID_VALUE: number;
    INVERT: number;
    KEEP: number;
    LEQUAL: number;
    LESS: number;
    LINEAR: number;
    LINEAR_MIPMAP_LINEAR: number;
    LINEAR_MIPMAP_NEAREST: number;
    LINES: number;
    LINE_LOOP: number;
    LINE_STRIP: number;
    LINE_WIDTH: number;
    LINK_STATUS: number;
    LOW_FLOAT: number;
    LOW_INT: number;
    LUMINANCE: number;
    LUMINANCE_ALPHA: number;
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
    MAX_CUBE_MAP_TEXTURE_SIZE: number;
    MAX_FRAGMENT_UNIFORM_VECTORS: number;
    MAX_RENDERBUFFER_SIZE: number;
    MAX_TEXTURE_IMAGE_UNITS: number;
    MAX_TEXTURE_SIZE: number;
    MAX_VARYING_VECTORS: number;
    MAX_VERTEX_ATTRIBS: number;
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
    MAX_VERTEX_UNIFORM_VECTORS: number;
    MAX_VIEWPORT_DIMS: number;
    MEDIUM_FLOAT: number;
    MEDIUM_INT: number;
    MIRRORED_REPEAT: number;
    NEAREST: number;
    NEAREST_MIPMAP_LINEAR: number;
    NEAREST_MIPMAP_NEAREST: number;
    NEVER: number;
    NICEST: number;
    NONE: number;
    NOTEQUAL: number;
    NO_ERROR: number;
    ONE: number;
    ONE_MINUS_CONSTANT_ALPHA: number;
    ONE_MINUS_CONSTANT_COLOR: number;
    ONE_MINUS_DST_ALPHA: number;
    ONE_MINUS_DST_COLOR: number;
    ONE_MINUS_SRC_ALPHA: number;
    ONE_MINUS_SRC_COLOR: number;
    OUT_OF_MEMORY: number;
    PACK_ALIGNMENT: number;
    POINTS: number;
    POLYGON_OFFSET_FACTOR: number;
    POLYGON_OFFSET_FILL: number;
    POLYGON_OFFSET_UNITS: number;
    RED_BITS: number;
    RENDERBUFFER: number;
    RENDERBUFFER_ALPHA_SIZE: number;
    RENDERBUFFER_BINDING: number;
    RENDERBUFFER_BLUE_SIZE: number;
    RENDERBUFFER_DEPTH_SIZE: number;
    RENDERBUFFER_GREEN_SIZE: number;
    RENDERBUFFER_HEIGHT: number;
    RENDERBUFFER_INTERNAL_FORMAT: number;
    RENDERBUFFER_RED_SIZE: number;
    RENDERBUFFER_STENCIL_SIZE: number;
    RENDERBUFFER_WIDTH: number;
    RENDERER: number;
    REPEAT: number;
    REPLACE: number;
    RGB: number;
    RGB565: number;
    RGB5_A1: number;
    RGBA: number;
    RGBA4: number;
    SAMPLER_2D: number;
    SAMPLER_CUBE: number;
    SAMPLES: number;
    SAMPLE_ALPHA_TO_COVERAGE: number;
    SAMPLE_BUFFERS: number;
    SAMPLE_COVERAGE: number;
    SAMPLE_COVERAGE_INVERT: number;
    SAMPLE_COVERAGE_VALUE: number;
    SCISSOR_BOX: number;
    SCISSOR_TEST: number;
    SHADER_TYPE: number;
    SHADING_LANGUAGE_VERSION: number;
    SHORT: number;
    SRC_ALPHA: number;
    SRC_ALPHA_SATURATE: number;
    SRC_COLOR: number;
    STATIC_DRAW: number;
    STENCIL_ATTACHMENT: number;
    STENCIL_BACK_FAIL: number;
    STENCIL_BACK_FUNC: number;
    STENCIL_BACK_PASS_DEPTH_FAIL: number;
    STENCIL_BACK_PASS_DEPTH_PASS: number;
    STENCIL_BACK_REF: number;
    STENCIL_BACK_VALUE_MASK: number;
    STENCIL_BACK_WRITEMASK: number;
    STENCIL_BITS: number;
    STENCIL_BUFFER_BIT: number;
    STENCIL_CLEAR_VALUE: number;
    STENCIL_FAIL: number;
    STENCIL_FUNC: number;
    STENCIL_INDEX: number;
    STENCIL_INDEX8: number;
    STENCIL_PASS_DEPTH_FAIL: number;
    STENCIL_PASS_DEPTH_PASS: number;
    STENCIL_REF: number;
    STENCIL_TEST: number;
    STENCIL_VALUE_MASK: number;
    STENCIL_WRITEMASK: number;
    STREAM_DRAW: number;
    SUBPIXEL_BITS: number;
    TEXTURE: number;
    TEXTURE0: number;
    TEXTURE1: number;
    TEXTURE10: number;
    TEXTURE11: number;
    TEXTURE12: number;
    TEXTURE13: number;
    TEXTURE14: number;
    TEXTURE15: number;
    TEXTURE16: number;
    TEXTURE17: number;
    TEXTURE18: number;
    TEXTURE19: number;
    TEXTURE2: number;
    TEXTURE20: number;
    TEXTURE21: number;
    TEXTURE22: number;
    TEXTURE23: number;
    TEXTURE24: number;
    TEXTURE25: number;
    TEXTURE26: number;
    TEXTURE27: number;
    TEXTURE28: number;
    TEXTURE29: number;
    TEXTURE3: number;
    TEXTURE30: number;
    TEXTURE31: number;
    TEXTURE4: number;
    TEXTURE5: number;
    TEXTURE6: number;
    TEXTURE7: number;
    TEXTURE8: number;
    TEXTURE9: number;
    TEXTURE_2D: number;
    TEXTURE_BINDING_2D: number;
    TEXTURE_BINDING_CUBE_MAP: number;
    TEXTURE_CUBE_MAP: number;
    TEXTURE_CUBE_MAP_NEGATIVE_X: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
    TEXTURE_CUBE_MAP_POSITIVE_X: number;
    TEXTURE_CUBE_MAP_POSITIVE_Y: number;
    TEXTURE_CUBE_MAP_POSITIVE_Z: number;
    TEXTURE_MAG_FILTER: number;
    TEXTURE_MIN_FILTER: number;
    TEXTURE_WRAP_S: number;
    TEXTURE_WRAP_T: number;
    TRIANGLES: number;
    TRIANGLE_FAN: number;
    TRIANGLE_STRIP: number;
    UNPACK_ALIGNMENT: number;
    UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
    UNPACK_FLIP_Y_WEBGL: number;
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
    UNSIGNED_BYTE: number;
    UNSIGNED_INT: number;
    UNSIGNED_SHORT: number;
    UNSIGNED_SHORT_4_4_4_4: number;
    UNSIGNED_SHORT_5_5_5_1: number;
    UNSIGNED_SHORT_5_6_5: number;
    VALIDATE_STATUS: number;
    VENDOR: number;
    VERSION: number;
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
    VERTEX_ATTRIB_ARRAY_ENABLED: number;
    VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
    VERTEX_ATTRIB_ARRAY_POINTER: number;
    VERTEX_ATTRIB_ARRAY_SIZE: number;
    VERTEX_ATTRIB_ARRAY_STRIDE: number;
    VERTEX_ATTRIB_ARRAY_TYPE: number;
    VERTEX_SHADER: number;
    VIEWPORT: number;
    ZERO: number;
}

declare var WebGLRenderingContext: {
    prototype: WebGLRenderingContext;
    new(): WebGLRenderingContext;
    ACTIVE_ATTRIBUTES: number;
    ACTIVE_TEXTURE: number;
    ACTIVE_UNIFORMS: number;
    ALIASED_LINE_WIDTH_RANGE: number;
    ALIASED_POINT_SIZE_RANGE: number;
    ALPHA: number;
    ALPHA_BITS: number;
    ALWAYS: number;
    ARRAY_BUFFER: number;
    ARRAY_BUFFER_BINDING: number;
    ATTACHED_SHADERS: number;
    BACK: number;
    BLEND: number;
    BLEND_COLOR: number;
    BLEND_DST_ALPHA: number;
    BLEND_DST_RGB: number;
    BLEND_EQUATION: number;
    BLEND_EQUATION_ALPHA: number;
    BLEND_EQUATION_RGB: number;
    BLEND_SRC_ALPHA: number;
    BLEND_SRC_RGB: number;
    BLUE_BITS: number;
    BOOL: number;
    BOOL_VEC2: number;
    BOOL_VEC3: number;
    BOOL_VEC4: number;
    BROWSER_DEFAULT_WEBGL: number;
    BUFFER_SIZE: number;
    BUFFER_USAGE: number;
    BYTE: number;
    CCW: number;
    CLAMP_TO_EDGE: number;
    COLOR_ATTACHMENT0: number;
    COLOR_BUFFER_BIT: number;
    COLOR_CLEAR_VALUE: number;
    COLOR_WRITEMASK: number;
    COMPILE_STATUS: number;
    COMPRESSED_TEXTURE_FORMATS: number;
    CONSTANT_ALPHA: number;
    CONSTANT_COLOR: number;
    CONTEXT_LOST_WEBGL: number;
    CULL_FACE: number;
    CULL_FACE_MODE: number;
    CURRENT_PROGRAM: number;
    CURRENT_VERTEX_ATTRIB: number;
    CW: number;
    DECR: number;
    DECR_WRAP: number;
    DELETE_STATUS: number;
    DEPTH_ATTACHMENT: number;
    DEPTH_BITS: number;
    DEPTH_BUFFER_BIT: number;
    DEPTH_CLEAR_VALUE: number;
    DEPTH_COMPONENT: number;
    DEPTH_COMPONENT16: number;
    DEPTH_FUNC: number;
    DEPTH_RANGE: number;
    DEPTH_STENCIL: number;
    DEPTH_STENCIL_ATTACHMENT: number;
    DEPTH_TEST: number;
    DEPTH_WRITEMASK: number;
    DITHER: number;
    DONT_CARE: number;
    DST_ALPHA: number;
    DST_COLOR: number;
    DYNAMIC_DRAW: number;
    ELEMENT_ARRAY_BUFFER: number;
    ELEMENT_ARRAY_BUFFER_BINDING: number;
    EQUAL: number;
    FASTEST: number;
    FLOAT: number;
    FLOAT_MAT2: number;
    FLOAT_MAT3: number;
    FLOAT_MAT4: number;
    FLOAT_VEC2: number;
    FLOAT_VEC3: number;
    FLOAT_VEC4: number;
    FRAGMENT_SHADER: number;
    FRAMEBUFFER: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
    FRAMEBUFFER_BINDING: number;
    FRAMEBUFFER_COMPLETE: number;
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
    FRAMEBUFFER_UNSUPPORTED: number;
    FRONT: number;
    FRONT_AND_BACK: number;
    FRONT_FACE: number;
    FUNC_ADD: number;
    FUNC_REVERSE_SUBTRACT: number;
    FUNC_SUBTRACT: number;
    GENERATE_MIPMAP_HINT: number;
    GEQUAL: number;
    GREATER: number;
    GREEN_BITS: number;
    HIGH_FLOAT: number;
    HIGH_INT: number;
    IMPLEMENTATION_COLOR_READ_FORMAT: number;
    IMPLEMENTATION_COLOR_READ_TYPE: number;
    INCR: number;
    INCR_WRAP: number;
    INT: number;
    INT_VEC2: number;
    INT_VEC3: number;
    INT_VEC4: number;
    INVALID_ENUM: number;
    INVALID_FRAMEBUFFER_OPERATION: number;
    INVALID_OPERATION: number;
    INVALID_VALUE: number;
    INVERT: number;
    KEEP: number;
    LEQUAL: number;
    LESS: number;
    LINEAR: number;
    LINEAR_MIPMAP_LINEAR: number;
    LINEAR_MIPMAP_NEAREST: number;
    LINES: number;
    LINE_LOOP: number;
    LINE_STRIP: number;
    LINE_WIDTH: number;
    LINK_STATUS: number;
    LOW_FLOAT: number;
    LOW_INT: number;
    LUMINANCE: number;
    LUMINANCE_ALPHA: number;
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
    MAX_CUBE_MAP_TEXTURE_SIZE: number;
    MAX_FRAGMENT_UNIFORM_VECTORS: number;
    MAX_RENDERBUFFER_SIZE: number;
    MAX_TEXTURE_IMAGE_UNITS: number;
    MAX_TEXTURE_SIZE: number;
    MAX_VARYING_VECTORS: number;
    MAX_VERTEX_ATTRIBS: number;
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
    MAX_VERTEX_UNIFORM_VECTORS: number;
    MAX_VIEWPORT_DIMS: number;
    MEDIUM_FLOAT: number;
    MEDIUM_INT: number;
    MIRRORED_REPEAT: number;
    NEAREST: number;
    NEAREST_MIPMAP_LINEAR: number;
    NEAREST_MIPMAP_NEAREST: number;
    NEVER: number;
    NICEST: number;
    NONE: number;
    NOTEQUAL: number;
    NO_ERROR: number;
    ONE: number;
    ONE_MINUS_CONSTANT_ALPHA: number;
    ONE_MINUS_CONSTANT_COLOR: number;
    ONE_MINUS_DST_ALPHA: number;
    ONE_MINUS_DST_COLOR: number;
    ONE_MINUS_SRC_ALPHA: number;
    ONE_MINUS_SRC_COLOR: number;
    OUT_OF_MEMORY: number;
    PACK_ALIGNMENT: number;
    POINTS: number;
    POLYGON_OFFSET_FACTOR: number;
    POLYGON_OFFSET_FILL: number;
    POLYGON_OFFSET_UNITS: number;
    RED_BITS: number;
    RENDERBUFFER: number;
    RENDERBUFFER_ALPHA_SIZE: number;
    RENDERBUFFER_BINDING: number;
    RENDERBUFFER_BLUE_SIZE: number;
    RENDERBUFFER_DEPTH_SIZE: number;
    RENDERBUFFER_GREEN_SIZE: number;
    RENDERBUFFER_HEIGHT: number;
    RENDERBUFFER_INTERNAL_FORMAT: number;
    RENDERBUFFER_RED_SIZE: number;
    RENDERBUFFER_STENCIL_SIZE: number;
    RENDERBUFFER_WIDTH: number;
    RENDERER: number;
    REPEAT: number;
    REPLACE: number;
    RGB: number;
    RGB565: number;
    RGB5_A1: number;
    RGBA: number;
    RGBA4: number;
    SAMPLER_2D: number;
    SAMPLER_CUBE: number;
    SAMPLES: number;
    SAMPLE_ALPHA_TO_COVERAGE: number;
    SAMPLE_BUFFERS: number;
    SAMPLE_COVERAGE: number;
    SAMPLE_COVERAGE_INVERT: number;
    SAMPLE_COVERAGE_VALUE: number;
    SCISSOR_BOX: number;
    SCISSOR_TEST: number;
    SHADER_TYPE: number;
    SHADING_LANGUAGE_VERSION: number;
    SHORT: number;
    SRC_ALPHA: number;
    SRC_ALPHA_SATURATE: number;
    SRC_COLOR: number;
    STATIC_DRAW: number;
    STENCIL_ATTACHMENT: number;
    STENCIL_BACK_FAIL: number;
    STENCIL_BACK_FUNC: number;
    STENCIL_BACK_PASS_DEPTH_FAIL: number;
    STENCIL_BACK_PASS_DEPTH_PASS: number;
    STENCIL_BACK_REF: number;
    STENCIL_BACK_VALUE_MASK: number;
    STENCIL_BACK_WRITEMASK: number;
    STENCIL_BITS: number;
    STENCIL_BUFFER_BIT: number;
    STENCIL_CLEAR_VALUE: number;
    STENCIL_FAIL: number;
    STENCIL_FUNC: number;
    STENCIL_INDEX: number;
    STENCIL_INDEX8: number;
    STENCIL_PASS_DEPTH_FAIL: number;
    STENCIL_PASS_DEPTH_PASS: number;
    STENCIL_REF: number;
    STENCIL_TEST: number;
    STENCIL_VALUE_MASK: number;
    STENCIL_WRITEMASK: number;
    STREAM_DRAW: number;
    SUBPIXEL_BITS: number;
    TEXTURE: number;
    TEXTURE0: number;
    TEXTURE1: number;
    TEXTURE10: number;
    TEXTURE11: number;
    TEXTURE12: number;
    TEXTURE13: number;
    TEXTURE14: number;
    TEXTURE15: number;
    TEXTURE16: number;
    TEXTURE17: number;
    TEXTURE18: number;
    TEXTURE19: number;
    TEXTURE2: number;
    TEXTURE20: number;
    TEXTURE21: number;
    TEXTURE22: number;
    TEXTURE23: number;
    TEXTURE24: number;
    TEXTURE25: number;
    TEXTURE26: number;
    TEXTURE27: number;
    TEXTURE28: number;
    TEXTURE29: number;
    TEXTURE3: number;
    TEXTURE30: number;
    TEXTURE31: number;
    TEXTURE4: number;
    TEXTURE5: number;
    TEXTURE6: number;
    TEXTURE7: number;
    TEXTURE8: number;
    TEXTURE9: number;
    TEXTURE_2D: number;
    TEXTURE_BINDING_2D: number;
    TEXTURE_BINDING_CUBE_MAP: number;
    TEXTURE_CUBE_MAP: number;
    TEXTURE_CUBE_MAP_NEGATIVE_X: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
    TEXTURE_CUBE_MAP_POSITIVE_X: number;
    TEXTURE_CUBE_MAP_POSITIVE_Y: number;
    TEXTURE_CUBE_MAP_POSITIVE_Z: number;
    TEXTURE_MAG_FILTER: number;
    TEXTURE_MIN_FILTER: number;
    TEXTURE_WRAP_S: number;
    TEXTURE_WRAP_T: number;
    TRIANGLES: number;
    TRIANGLE_FAN: number;
    TRIANGLE_STRIP: number;
    UNPACK_ALIGNMENT: number;
    UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
    UNPACK_FLIP_Y_WEBGL: number;
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
    UNSIGNED_BYTE: number;
    UNSIGNED_INT: number;
    UNSIGNED_SHORT: number;
    UNSIGNED_SHORT_4_4_4_4: number;
    UNSIGNED_SHORT_5_5_5_1: number;
    UNSIGNED_SHORT_5_6_5: number;
    VALIDATE_STATUS: number;
    VENDOR: number;
    VERSION: number;
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
    VERTEX_ATTRIB_ARRAY_ENABLED: number;
    VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
    VERTEX_ATTRIB_ARRAY_POINTER: number;
    VERTEX_ATTRIB_ARRAY_SIZE: number;
    VERTEX_ATTRIB_ARRAY_STRIDE: number;
    VERTEX_ATTRIB_ARRAY_TYPE: number;
    VERTEX_SHADER: number;
    VIEWPORT: number;
    ZERO: number;
}

interface WebGLShader extends WebGLObject {
}

declare var WebGLShader: {
    prototype: WebGLShader;
    new(): WebGLShader;
}

interface WebGLShaderPrecisionFormat {
    precision: number;
    rangeMax: number;
    rangeMin: number;
}

declare var WebGLShaderPrecisionFormat: {
    prototype: WebGLShaderPrecisionFormat;
    new(): WebGLShaderPrecisionFormat;
}

interface WebGLTexture extends WebGLObject {
}

declare var WebGLTexture: {
    prototype: WebGLTexture;
    new(): WebGLTexture;
}

interface WebGLUniformLocation {
}

declare var WebGLUniformLocation: {
    prototype: WebGLUniformLocation;
    new(): WebGLUniformLocation;
}

interface WebKitCSSMatrix {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    m41: number;
    m42: number;
    m43: number;
    m44: number;
    inverse(): WebKitCSSMatrix;
    multiply(secondMatrix: WebKitCSSMatrix): WebKitCSSMatrix;
    rotate(angleX: number, angleY?: number, angleZ?: number): WebKitCSSMatrix;
    rotateAxisAngle(x: number, y: number, z: number, angle: number): WebKitCSSMatrix;
    scale(scaleX: number, scaleY?: number, scaleZ?: number): WebKitCSSMatrix;
    setMatrixValue(value: string): void;
    skewX(angle: number): WebKitCSSMatrix;
    skewY(angle: number): WebKitCSSMatrix;
    toString(): string;
    translate(x: number, y: number, z?: number): WebKitCSSMatrix;
}

declare var WebKitCSSMatrix: {
    prototype: WebKitCSSMatrix;
    new(text?: string): WebKitCSSMatrix;
}

interface WebKitPoint {
    x: number;
    y: number;
}

declare var WebKitPoint: {
    prototype: WebKitPoint;
    new(x?: number, y?: number): WebKitPoint;
}

interface WebSocket extends EventTarget {
    binaryType: string;
    bufferedAmount: number;
    extensions: string;
    onclose: (ev: CloseEvent) => any;
    onerror: (ev: Event) => any;
    onmessage: (ev: MessageEvent) => any;
    onopen: (ev: Event) => any;
    protocol: string;
    readyState: number;
    url: string;
    close(code?: number, reason?: string): void;
    send(data: any): void;
    CLOSED: number;
    CLOSING: number;
    CONNECTING: number;
    OPEN: number;
    addEventListener(type: "close", listener: (ev: CloseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "open", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var WebSocket: {
    prototype: WebSocket;
    new(url: string, protocols?: string): WebSocket;
    new(url: string, protocols?: any): WebSocket;
    CLOSED: number;
    CLOSING: number;
    CONNECTING: number;
    OPEN: number;
}

interface WheelEvent extends MouseEvent {
    deltaMode: number;
    deltaX: number;
    deltaY: number;
    deltaZ: number;
    getCurrentPoint(element: Element): void;
    initWheelEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, deltaXArg: number, deltaYArg: number, deltaZArg: number, deltaMode: number): void;
    DOM_DELTA_LINE: number;
    DOM_DELTA_PAGE: number;
    DOM_DELTA_PIXEL: number;
}

declare var WheelEvent: {
    prototype: WheelEvent;
    new(typeArg: string, eventInitDict?: WheelEventInit): WheelEvent;
    DOM_DELTA_LINE: number;
    DOM_DELTA_PAGE: number;
    DOM_DELTA_PIXEL: number;
}

interface Window extends EventTarget, WindowTimers, WindowSessionStorage, WindowLocalStorage, WindowConsole, GlobalEventHandlers, IDBEnvironment, WindowBase64 {
    animationStartTime: number;
    applicationCache: ApplicationCache;
    clientInformation: Navigator;
    closed: boolean;
    crypto: Crypto;
    defaultStatus: string;
    devicePixelRatio: number;
    doNotTrack: string;
    document: Document;
    event: Event;
    external: External;
    frameElement: Element;
    frames: Window;
    history: History;
    innerHeight: number;
    innerWidth: number;
    length: number;
    location: Location;
    locationbar: BarProp;
    menubar: BarProp;
    msAnimationStartTime: number;
    msTemplatePrinter: MSTemplatePrinter;
    name: string;
    navigator: Navigator;
    offscreenBuffering: string | boolean;
    onabort: (ev: Event) => any;
    onafterprint: (ev: Event) => any;
    onbeforeprint: (ev: Event) => any;
    onbeforeunload: (ev: BeforeUnloadEvent) => any;
    onblur: (ev: FocusEvent) => any;
    oncanplay: (ev: Event) => any;
    oncanplaythrough: (ev: Event) => any;
    onchange: (ev: Event) => any;
    onclick: (ev: MouseEvent) => any;
    oncompassneedscalibration: (ev: Event) => any;
    oncontextmenu: (ev: PointerEvent) => any;
    ondblclick: (ev: MouseEvent) => any;
    ondevicemotion: (ev: DeviceMotionEvent) => any;
    ondeviceorientation: (ev: DeviceOrientationEvent) => any;
    ondrag: (ev: DragEvent) => any;
    ondragend: (ev: DragEvent) => any;
    ondragenter: (ev: DragEvent) => any;
    ondragleave: (ev: DragEvent) => any;
    ondragover: (ev: DragEvent) => any;
    ondragstart: (ev: DragEvent) => any;
    ondrop: (ev: DragEvent) => any;
    ondurationchange: (ev: Event) => any;
    onemptied: (ev: Event) => any;
    onended: (ev: Event) => any;
    onerror: ErrorEventHandler;
    onfocus: (ev: FocusEvent) => any;
    onhashchange: (ev: HashChangeEvent) => any;
    oninput: (ev: Event) => any;
    onkeydown: (ev: KeyboardEvent) => any;
    onkeypress: (ev: KeyboardEvent) => any;
    onkeyup: (ev: KeyboardEvent) => any;
    onload: (ev: Event) => any;
    onloadeddata: (ev: Event) => any;
    onloadedmetadata: (ev: Event) => any;
    onloadstart: (ev: Event) => any;
    onmessage: (ev: MessageEvent) => any;
    onmousedown: (ev: MouseEvent) => any;
    onmouseenter: (ev: MouseEvent) => any;
    onmouseleave: (ev: MouseEvent) => any;
    onmousemove: (ev: MouseEvent) => any;
    onmouseout: (ev: MouseEvent) => any;
    onmouseover: (ev: MouseEvent) => any;
    onmouseup: (ev: MouseEvent) => any;
    onmousewheel: (ev: MouseWheelEvent) => any;
    onmsgesturechange: (ev: MSGestureEvent) => any;
    onmsgesturedoubletap: (ev: MSGestureEvent) => any;
    onmsgestureend: (ev: MSGestureEvent) => any;
    onmsgesturehold: (ev: MSGestureEvent) => any;
    onmsgesturestart: (ev: MSGestureEvent) => any;
    onmsgesturetap: (ev: MSGestureEvent) => any;
    onmsinertiastart: (ev: MSGestureEvent) => any;
    onmspointercancel: (ev: MSPointerEvent) => any;
    onmspointerdown: (ev: MSPointerEvent) => any;
    onmspointerenter: (ev: MSPointerEvent) => any;
    onmspointerleave: (ev: MSPointerEvent) => any;
    onmspointermove: (ev: MSPointerEvent) => any;
    onmspointerout: (ev: MSPointerEvent) => any;
    onmspointerover: (ev: MSPointerEvent) => any;
    onmspointerup: (ev: MSPointerEvent) => any;
    onoffline: (ev: Event) => any;
    ononline: (ev: Event) => any;
    onorientationchange: (ev: Event) => any;
    onpagehide: (ev: PageTransitionEvent) => any;
    onpageshow: (ev: PageTransitionEvent) => any;
    onpause: (ev: Event) => any;
    onplay: (ev: Event) => any;
    onplaying: (ev: Event) => any;
    onpopstate: (ev: PopStateEvent) => any;
    onprogress: (ev: ProgressEvent) => any;
    onratechange: (ev: Event) => any;
    onreadystatechange: (ev: ProgressEvent) => any;
    onreset: (ev: Event) => any;
    onresize: (ev: UIEvent) => any;
    onscroll: (ev: UIEvent) => any;
    onseeked: (ev: Event) => any;
    onseeking: (ev: Event) => any;
    onselect: (ev: UIEvent) => any;
    onstalled: (ev: Event) => any;
    onstorage: (ev: StorageEvent) => any;
    onsubmit: (ev: Event) => any;
    onsuspend: (ev: Event) => any;
    ontimeupdate: (ev: Event) => any;
    ontouchcancel: any;
    ontouchend: any;
    ontouchmove: any;
    ontouchstart: any;
    onunload: (ev: Event) => any;
    onvolumechange: (ev: Event) => any;
    onwaiting: (ev: Event) => any;
    opener: Window;
    orientation: string;
    outerHeight: number;
    outerWidth: number;
    pageXOffset: number;
    pageYOffset: number;
    parent: Window;
    performance: Performance;
    personalbar: BarProp;
    screen: Screen;
    screenLeft: number;
    screenTop: number;
    screenX: number;
    screenY: number;
    scrollX: number;
    scrollY: number;
    scrollbars: BarProp;
    self: Window;
    status: string;
    statusbar: BarProp;
    styleMedia: StyleMedia;
    toolbar: BarProp;
    top: Window;
    window: Window;
    alert(message?: any): void;
    blur(): void;
    cancelAnimationFrame(handle: number): void;
    captureEvents(): void;
    close(): void;
    confirm(message?: string): boolean;
    focus(): void;
    getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
    getMatchedCSSRules(elt: Element, pseudoElt?: string): CSSRuleList;
    getSelection(): Selection;
    matchMedia(mediaQuery: string): MediaQueryList;
    moveBy(x?: number, y?: number): void;
    moveTo(x?: number, y?: number): void;
    msCancelRequestAnimationFrame(handle: number): void;
    msMatchMedia(mediaQuery: string): MediaQueryList;
    msRequestAnimationFrame(callback: FrameRequestCallback): number;
    msWriteProfilerMark(profilerMarkName: string): void;
    open(url?: string, target?: string, features?: string, replace?: boolean): any;
    postMessage(message: any, targetOrigin: string, ports?: any): void;
    print(): void;
    prompt(message?: string, _default?: string): string;
    releaseEvents(): void;
    requestAnimationFrame(callback: FrameRequestCallback): number;
    resizeBy(x?: number, y?: number): void;
    resizeTo(x?: number, y?: number): void;
    scroll(x?: number, y?: number): void;
    scrollBy(x?: number, y?: number): void;
    scrollTo(x?: number, y?: number): void;
    webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint;
    webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "compassneedscalibration", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "contextmenu", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "devicemotion", listener: (ev: DeviceMotionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "deviceorientation", listener: (ev: DeviceOrientationEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "hashchange", listener: (ev: HashChangeEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "orientationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "readystatechange", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
    [index: number]: Window;
}

declare var Window: {
    prototype: Window;
    new(): Window;
}

interface Worker extends EventTarget, AbstractWorker {
    onmessage: (ev: MessageEvent) => any;
    postMessage(message: any, ports?: any): void;
    terminate(): void;
    addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var Worker: {
    prototype: Worker;
    new(stringUrl: string): Worker;
}

interface XMLDocument extends Document {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var XMLDocument: {
    prototype: XMLDocument;
    new(): XMLDocument;
}

interface XMLHttpRequest extends EventTarget, XMLHttpRequestEventTarget {
    msCaching: string;
    onreadystatechange: (ev: ProgressEvent) => any;
    readyState: number;
    response: any;
    responseBody: any;
    responseText: string;
    responseType: string;
    responseXML: any;
    status: number;
    statusText: string;
    timeout: number;
    upload: XMLHttpRequestUpload;
    withCredentials: boolean;
    abort(): void;
    create(): XMLHttpRequest;
    getAllResponseHeaders(): string;
    getResponseHeader(header: string): string;
    msCachingEnabled(): boolean;
    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
    overrideMimeType(mime: string): void;
    send(data?: Document): void;
    send(data?: string): void;
    setRequestHeader(header: string, value: string): void;
    DONE: number;
    HEADERS_RECEIVED: number;
    LOADING: number;
    OPENED: number;
    UNSENT: number;
    addEventListener(type: "readystatechange", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeout", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var XMLHttpRequest: {
    prototype: XMLHttpRequest;
    new(): XMLHttpRequest;
    DONE: number;
    HEADERS_RECEIVED: number;
    LOADING: number;
    OPENED: number;
    UNSENT: number;
    create(): XMLHttpRequest;
}

interface XMLHttpRequestUpload extends EventTarget, XMLHttpRequestEventTarget {
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

declare var XMLHttpRequestUpload: {
    prototype: XMLHttpRequestUpload;
    new(): XMLHttpRequestUpload;
}

interface XMLSerializer {
    serializeToString(target: Node): string;
}

declare var XMLSerializer: {
    prototype: XMLSerializer;
    new(): XMLSerializer;
}

interface XPathEvaluator {
    createExpression(expression: string, resolver: XPathNSResolver): XPathExpression;
    createNSResolver(nodeResolver?: Node): XPathNSResolver;
    evaluate(expression: string, contextNode: Node, resolver: XPathNSResolver, type: number, result: XPathResult): XPathResult;
}

declare var XPathEvaluator: {
    prototype: XPathEvaluator;
    new(): XPathEvaluator;
}

interface XPathExpression {
    evaluate(contextNode: Node, type: number, result: XPathResult): XPathExpression;
}

declare var XPathExpression: {
    prototype: XPathExpression;
    new(): XPathExpression;
}

interface XPathNSResolver {
    lookupNamespaceURI(prefix: string): string;
}

declare var XPathNSResolver: {
    prototype: XPathNSResolver;
    new(): XPathNSResolver;
}

interface XPathResult {
    booleanValue: boolean;
    invalidIteratorState: boolean;
    numberValue: number;
    resultType: number;
    singleNodeValue: Node;
    snapshotLength: number;
    stringValue: string;
    iterateNext(): Node;
    snapshotItem(index: number): Node;
    ANY_TYPE: number;
    ANY_UNORDERED_NODE_TYPE: number;
    BOOLEAN_TYPE: number;
    FIRST_ORDERED_NODE_TYPE: number;
    NUMBER_TYPE: number;
    ORDERED_NODE_ITERATOR_TYPE: number;
    ORDERED_NODE_SNAPSHOT_TYPE: number;
    STRING_TYPE: number;
    UNORDERED_NODE_ITERATOR_TYPE: number;
    UNORDERED_NODE_SNAPSHOT_TYPE: number;
}

declare var XPathResult: {
    prototype: XPathResult;
    new(): XPathResult;
    ANY_TYPE: number;
    ANY_UNORDERED_NODE_TYPE: number;
    BOOLEAN_TYPE: number;
    FIRST_ORDERED_NODE_TYPE: number;
    NUMBER_TYPE: number;
    ORDERED_NODE_ITERATOR_TYPE: number;
    ORDERED_NODE_SNAPSHOT_TYPE: number;
    STRING_TYPE: number;
    UNORDERED_NODE_ITERATOR_TYPE: number;
    UNORDERED_NODE_SNAPSHOT_TYPE: number;
}

interface XSLTProcessor {
    clearParameters(): void;
    getParameter(namespaceURI: string, localName: string): any;
    importStylesheet(style: Node): void;
    removeParameter(namespaceURI: string, localName: string): void;
    reset(): void;
    setParameter(namespaceURI: string, localName: string, value: any): void;
    transformToDocument(source: Node): Document;
    transformToFragment(source: Node, document: Document): DocumentFragment;
}

declare var XSLTProcessor: {
    prototype: XSLTProcessor;
    new(): XSLTProcessor;
}

interface AbstractWorker {
    onerror: (ev: Event) => any;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

interface ChildNode {
    remove(): void;
}

interface DOML2DeprecatedColorProperty {
    color: string;
}

interface DOML2DeprecatedSizeProperty {
    size: number;
}

interface DocumentEvent {
    createEvent(eventInterface:"AnimationEvent"): AnimationEvent;
    createEvent(eventInterface:"AriaRequestEvent"): AriaRequestEvent;
    createEvent(eventInterface:"AudioProcessingEvent"): AudioProcessingEvent;
    createEvent(eventInterface:"BeforeUnloadEvent"): BeforeUnloadEvent;
    createEvent(eventInterface:"CloseEvent"): CloseEvent;
    createEvent(eventInterface:"CommandEvent"): CommandEvent;
    createEvent(eventInterface:"CompositionEvent"): CompositionEvent;
    createEvent(eventInterface:"DeviceMotionEvent"): DeviceMotionEvent;
    createEvent(eventInterface:"DeviceOrientationEvent"): DeviceOrientationEvent;
    createEvent(eventInterface:"DragEvent"): DragEvent;
    createEvent(eventInterface:"ErrorEvent"): ErrorEvent;
    createEvent(eventInterface:"Event"): Event;
    createEvent(eventInterface:"FocusEvent"): FocusEvent;
    createEvent(eventInterface:"GamepadEvent"): GamepadEvent;
    createEvent(eventInterface:"HashChangeEvent"): HashChangeEvent;
    createEvent(eventInterface:"IDBVersionChangeEvent"): IDBVersionChangeEvent;
    createEvent(eventInterface:"KeyboardEvent"): KeyboardEvent;
    createEvent(eventInterface:"LongRunningScriptDetectedEvent"): LongRunningScriptDetectedEvent;
    createEvent(eventInterface:"MSGestureEvent"): MSGestureEvent;
    createEvent(eventInterface:"MSManipulationEvent"): MSManipulationEvent;
    createEvent(eventInterface:"MSMediaKeyMessageEvent"): MSMediaKeyMessageEvent;
    createEvent(eventInterface:"MSMediaKeyNeededEvent"): MSMediaKeyNeededEvent;
    createEvent(eventInterface:"MSPointerEvent"): MSPointerEvent;
    createEvent(eventInterface:"MSSiteModeEvent"): MSSiteModeEvent;
    createEvent(eventInterface:"MessageEvent"): MessageEvent;
    createEvent(eventInterface:"MouseEvent"): MouseEvent;
    createEvent(eventInterface:"MouseWheelEvent"): MouseWheelEvent;
    createEvent(eventInterface:"MutationEvent"): MutationEvent;
    createEvent(eventInterface:"NavigationCompletedEvent"): NavigationCompletedEvent;
    createEvent(eventInterface:"NavigationEvent"): NavigationEvent;
    createEvent(eventInterface:"NavigationEventWithReferrer"): NavigationEventWithReferrer;
    createEvent(eventInterface:"OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
    createEvent(eventInterface:"PageTransitionEvent"): PageTransitionEvent;
    createEvent(eventInterface:"PermissionRequestedEvent"): PermissionRequestedEvent;
    createEvent(eventInterface:"PointerEvent"): PointerEvent;
    createEvent(eventInterface:"PopStateEvent"): PopStateEvent;
    createEvent(eventInterface:"ProgressEvent"): ProgressEvent;
    createEvent(eventInterface:"SVGZoomEvent"): SVGZoomEvent;
    createEvent(eventInterface:"ScriptNotifyEvent"): ScriptNotifyEvent;
    createEvent(eventInterface:"StorageEvent"): StorageEvent;
    createEvent(eventInterface:"TextEvent"): TextEvent;
    createEvent(eventInterface:"TouchEvent"): TouchEvent;
    createEvent(eventInterface:"TrackEvent"): TrackEvent;
    createEvent(eventInterface:"TransitionEvent"): TransitionEvent;
    createEvent(eventInterface:"UIEvent"): UIEvent;
    createEvent(eventInterface:"UnviewableContentIdentifiedEvent"): UnviewableContentIdentifiedEvent;
    createEvent(eventInterface:"WebGLContextEvent"): WebGLContextEvent;
    createEvent(eventInterface:"WheelEvent"): WheelEvent;
    createEvent(eventInterface: string): Event;
}

interface ElementTraversal {
    childElementCount: number;
    firstElementChild: Element;
    lastElementChild: Element;
    nextElementSibling: Element;
    previousElementSibling: Element;
}

interface GetSVGDocument {
    getSVGDocument(): Document;
}

interface GlobalEventHandlers {
    onpointercancel: (ev: PointerEvent) => any;
    onpointerdown: (ev: PointerEvent) => any;
    onpointerenter: (ev: PointerEvent) => any;
    onpointerleave: (ev: PointerEvent) => any;
    onpointermove: (ev: PointerEvent) => any;
    onpointerout: (ev: PointerEvent) => any;
    onpointerover: (ev: PointerEvent) => any;
    onpointerup: (ev: PointerEvent) => any;
    onwheel: (ev: WheelEvent) => any;
    addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

interface HTMLTableAlignment {
    ch: string;
    chOff: string;
    vAlign: string;
}

interface IDBEnvironment {
    indexedDB: IDBFactory;
    msIndexedDB: IDBFactory;
}

interface LinkStyle {
    sheet: StyleSheet;
}

interface MSBaseReader {
    onabort: (ev: Event) => any;
    onerror: (ev: Event) => any;
    onload: (ev: Event) => any;
    onloadend: (ev: ProgressEvent) => any;
    onloadstart: (ev: Event) => any;
    onprogress: (ev: ProgressEvent) => any;
    readyState: number;
    result: any;
    abort(): void;
    DONE: number;
    EMPTY: number;
    LOADING: number;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}

interface MSFileSaver {
    msSaveBlob(blob: any, defaultName?: string): boolean;
    msSaveOrOpenBlob(blob: any, defaultName?: string): boolean;
}

interface MSNavigatorDoNotTrack {
    confirmSiteSpecificTrackingException(args: ConfirmSiteSpecificExceptionsInformation): boolean;
    confirmWebWideTrackingException(args: ExceptionInformation): boolean;
    removeSiteSpecificTrackingException(args: ExceptionInformation): void;
    removeWebWideTrackingException(args: ExceptionInformation): void;
    storeSiteSpecificTrackingException(args: StoreSiteSpecificExceptionsInformation): void;
    storeWebWideTrackingException(args: StoreExceptionsInformation): void;
}

interface NavigatorContentUtils {
}

interface NavigatorGeolocation {
    geolocation: Geolocation;
}

interface NavigatorID {
    appName: string;
    appVersion: string;
    platform: string;
    product: string;
    productSub: string;
    userAgent: string;
    vendor: string;
    vendorSub: string;
}

interface NavigatorOnLine {
    onLine: boolean;
}

interface NavigatorStorageUtils {
}

interface NodeSelector {
    querySelector(selectors: string): Element;
    querySelectorAll(selectors: string): NodeList;
}

interface RandomSource {
    getRandomValues(array: any): any;
}

interface SVGAnimatedPathData {
    pathSegList: SVGPathSegList;
}

interface SVGAnimatedPoints {
    animatedPoints: SVGPointList;
    points: SVGPointList;
}

interface SVGExternalResourcesRequired {
    externalResourcesRequired: SVGAnimatedBoolean;
}

interface SVGFilterPrimitiveStandardAttributes extends SVGStylable {
    height: SVGAnimatedLength;
    result: SVGAnimatedString;
    width: SVGAnimatedLength;
    x: SVGAnimatedLength;
    y: SVGAnimatedLength;
}

interface SVGFitToViewBox {
    preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
    viewBox: SVGAnimatedRect;
}

interface SVGLangSpace {
    xmllang: string;
    xmlspace: string;
}

interface SVGLocatable {
    farthestViewportElement: SVGElement;
    nearestViewportElement: SVGElement;
    getBBox(): SVGRect;
    getCTM(): SVGMatrix;
    getScreenCTM(): SVGMatrix;
    getTransformToElement(element: SVGElement): SVGMatrix;
}

interface SVGStylable {
    className: SVGAnimatedString;
    style: CSSStyleDeclaration;
}

interface SVGTests {
    requiredExtensions: SVGStringList;
    requiredFeatures: SVGStringList;
    systemLanguage: SVGStringList;
    hasExtension(extension: string): boolean;
}

interface SVGTransformable extends SVGLocatable {
    transform: SVGAnimatedTransformList;
}

interface SVGURIReference {
    href: SVGAnimatedString;
}

interface WindowBase64 {
    atob(encodedString: string): string;
    btoa(rawString: string): string;
}

interface WindowConsole {
    console: Console;
}

interface WindowLocalStorage {
    localStorage: Storage;
}

interface WindowSessionStorage {
    sessionStorage: Storage;
}

interface WindowTimers extends Object, WindowTimersExtension {
    clearInterval(handle: number): void;
    clearTimeout(handle: number): void;
    setInterval(handler: any, timeout?: any, ...args: any[]): number;
    setTimeout(handler: any, timeout?: any, ...args: any[]): number;
}

interface WindowTimersExtension {
    clearImmediate(handle: number): void;
    msClearImmediate(handle: number): void;
    msSetImmediate(expression: any, ...args: any[]): number;
    setImmediate(expression: any, ...args: any[]): number;
}

interface XMLHttpRequestEventTarget {
    onabort: (ev: Event) => any;
    onerror: (ev: Event) => any;
    onload: (ev: Event) => any;
    onloadend: (ev: ProgressEvent) => any;
    onloadstart: (ev: Event) => any;
    onprogress: (ev: ProgressEvent) => any;
    ontimeout: (ev: ProgressEvent) => any;
    addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
    addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: "timeout", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
}


interface NodeListOf<TNode extends Node> extends NodeList {
    length: number;
    item(index: number): TNode;
    [index: number]: TNode;
}

interface BlobPropertyBag {
    type?: string;
    endings?: string;
}

declare var Audio: {new(src?: string): HTMLAudioElement; };
declare var Image: {new(width?: number, height?: number): HTMLImageElement; };
declare var Option: {new(text?: string, value?: string, defaultSelected?: boolean, selected?: boolean): HTMLOptionElement; };
declare var animationStartTime: number;
declare var applicationCache: ApplicationCache;
declare var clientInformation: Navigator;
declare var closed: boolean;
declare var crypto: Crypto;
declare var defaultStatus: string;
declare var devicePixelRatio: number;
declare var doNotTrack: string;
declare var document: Document;
declare var event: Event;
declare var external: External;
declare var frameElement: Element;
declare var frames: Window;
declare var history: History;
declare var innerHeight: number;
declare var innerWidth: number;
declare var length: number;
declare var location: Location;
declare var locationbar: BarProp;
declare var menubar: BarProp;
declare var msAnimationStartTime: number;
declare var msTemplatePrinter: MSTemplatePrinter;
declare var name: string;
declare var navigator: Navigator;
declare var offscreenBuffering: string | boolean;
declare var onabort: (ev: Event) => any;
declare var onafterprint: (ev: Event) => any;
declare var onbeforeprint: (ev: Event) => any;
declare var onbeforeunload: (ev: BeforeUnloadEvent) => any;
declare var onblur: (ev: FocusEvent) => any;
declare var oncanplay: (ev: Event) => any;
declare var oncanplaythrough: (ev: Event) => any;
declare var onchange: (ev: Event) => any;
declare var onclick: (ev: MouseEvent) => any;
declare var oncompassneedscalibration: (ev: Event) => any;
declare var oncontextmenu: (ev: PointerEvent) => any;
declare var ondblclick: (ev: MouseEvent) => any;
declare var ondevicemotion: (ev: DeviceMotionEvent) => any;
declare var ondeviceorientation: (ev: DeviceOrientationEvent) => any;
declare var ondrag: (ev: DragEvent) => any;
declare var ondragend: (ev: DragEvent) => any;
declare var ondragenter: (ev: DragEvent) => any;
declare var ondragleave: (ev: DragEvent) => any;
declare var ondragover: (ev: DragEvent) => any;
declare var ondragstart: (ev: DragEvent) => any;
declare var ondrop: (ev: DragEvent) => any;
declare var ondurationchange: (ev: Event) => any;
declare var onemptied: (ev: Event) => any;
declare var onended: (ev: Event) => any;
declare var onerror: ErrorEventHandler;
declare var onfocus: (ev: FocusEvent) => any;
declare var onhashchange: (ev: HashChangeEvent) => any;
declare var oninput: (ev: Event) => any;
declare var onkeydown: (ev: KeyboardEvent) => any;
declare var onkeypress: (ev: KeyboardEvent) => any;
declare var onkeyup: (ev: KeyboardEvent) => any;
declare var onload: (ev: Event) => any;
declare var onloadeddata: (ev: Event) => any;
declare var onloadedmetadata: (ev: Event) => any;
declare var onloadstart: (ev: Event) => any;
declare var onmessage: (ev: MessageEvent) => any;
declare var onmousedown: (ev: MouseEvent) => any;
declare var onmouseenter: (ev: MouseEvent) => any;
declare var onmouseleave: (ev: MouseEvent) => any;
declare var onmousemove: (ev: MouseEvent) => any;
declare var onmouseout: (ev: MouseEvent) => any;
declare var onmouseover: (ev: MouseEvent) => any;
declare var onmouseup: (ev: MouseEvent) => any;
declare var onmousewheel: (ev: MouseWheelEvent) => any;
declare var onmsgesturechange: (ev: MSGestureEvent) => any;
declare var onmsgesturedoubletap: (ev: MSGestureEvent) => any;
declare var onmsgestureend: (ev: MSGestureEvent) => any;
declare var onmsgesturehold: (ev: MSGestureEvent) => any;
declare var onmsgesturestart: (ev: MSGestureEvent) => any;
declare var onmsgesturetap: (ev: MSGestureEvent) => any;
declare var onmsinertiastart: (ev: MSGestureEvent) => any;
declare var onmspointercancel: (ev: MSPointerEvent) => any;
declare var onmspointerdown: (ev: MSPointerEvent) => any;
declare var onmspointerenter: (ev: MSPointerEvent) => any;
declare var onmspointerleave: (ev: MSPointerEvent) => any;
declare var onmspointermove: (ev: MSPointerEvent) => any;
declare var onmspointerout: (ev: MSPointerEvent) => any;
declare var onmspointerover: (ev: MSPointerEvent) => any;
declare var onmspointerup: (ev: MSPointerEvent) => any;
declare var onoffline: (ev: Event) => any;
declare var ononline: (ev: Event) => any;
declare var onorientationchange: (ev: Event) => any;
declare var onpagehide: (ev: PageTransitionEvent) => any;
declare var onpageshow: (ev: PageTransitionEvent) => any;
declare var onpause: (ev: Event) => any;
declare var onplay: (ev: Event) => any;
declare var onplaying: (ev: Event) => any;
declare var onpopstate: (ev: PopStateEvent) => any;
declare var onprogress: (ev: ProgressEvent) => any;
declare var onratechange: (ev: Event) => any;
declare var onreadystatechange: (ev: ProgressEvent) => any;
declare var onreset: (ev: Event) => any;
declare var onresize: (ev: UIEvent) => any;
declare var onscroll: (ev: UIEvent) => any;
declare var onseeked: (ev: Event) => any;
declare var onseeking: (ev: Event) => any;
declare var onselect: (ev: UIEvent) => any;
declare var onstalled: (ev: Event) => any;
declare var onstorage: (ev: StorageEvent) => any;
declare var onsubmit: (ev: Event) => any;
declare var onsuspend: (ev: Event) => any;
declare var ontimeupdate: (ev: Event) => any;
declare var ontouchcancel: any;
declare var ontouchend: any;
declare var ontouchmove: any;
declare var ontouchstart: any;
declare var onunload: (ev: Event) => any;
declare var onvolumechange: (ev: Event) => any;
declare var onwaiting: (ev: Event) => any;
declare var opener: Window;
declare var orientation: string;
declare var outerHeight: number;
declare var outerWidth: number;
declare var pageXOffset: number;
declare var pageYOffset: number;
declare var parent: Window;
declare var performance: Performance;
declare var personalbar: BarProp;
declare var screen: Screen;
declare var screenLeft: number;
declare var screenTop: number;
declare var screenX: number;
declare var screenY: number;
declare var scrollX: number;
declare var scrollY: number;
declare var scrollbars: BarProp;
declare var self: Window;
declare var status: string;
declare var statusbar: BarProp;
declare var styleMedia: StyleMedia;
declare var toolbar: BarProp;
declare var top: Window;
declare var window: Window;
declare function alert(message?: any): void;
declare function blur(): void;
declare function cancelAnimationFrame(handle: number): void;
declare function captureEvents(): void;
declare function close(): void;
declare function confirm(message?: string): boolean;
declare function focus(): void;
declare function getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
declare function getMatchedCSSRules(elt: Element, pseudoElt?: string): CSSRuleList;
declare function getSelection(): Selection;
declare function matchMedia(mediaQuery: string): MediaQueryList;
declare function moveBy(x?: number, y?: number): void;
declare function moveTo(x?: number, y?: number): void;
declare function msCancelRequestAnimationFrame(handle: number): void;
declare function msMatchMedia(mediaQuery: string): MediaQueryList;
declare function msRequestAnimationFrame(callback: FrameRequestCallback): number;
declare function msWriteProfilerMark(profilerMarkName: string): void;
declare function open(url?: string, target?: string, features?: string, replace?: boolean): any;
declare function postMessage(message: any, targetOrigin: string, ports?: any): void;
declare function print(): void;
declare function prompt(message?: string, _default?: string): string;
declare function releaseEvents(): void;
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
declare function resizeBy(x?: number, y?: number): void;
declare function resizeTo(x?: number, y?: number): void;
declare function scroll(x?: number, y?: number): void;
declare function scrollBy(x?: number, y?: number): void;
declare function scrollTo(x?: number, y?: number): void;
declare function webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint;
declare function webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint;
declare function addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
declare function dispatchEvent(evt: Event): boolean;
declare function removeEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
declare function clearInterval(handle: number): void;
declare function clearTimeout(handle: number): void;
declare function setInterval(handler: any, timeout?: any, ...args: any[]): number;
declare function setTimeout(handler: any, timeout?: any, ...args: any[]): number;
declare function clearImmediate(handle: number): void;
declare function msClearImmediate(handle: number): void;
declare function msSetImmediate(expression: any, ...args: any[]): number;
declare function setImmediate(expression: any, ...args: any[]): number;
declare var sessionStorage: Storage;
declare var localStorage: Storage;
declare var console: Console;
declare var onpointercancel: (ev: PointerEvent) => any;
declare var onpointerdown: (ev: PointerEvent) => any;
declare var onpointerenter: (ev: PointerEvent) => any;
declare var onpointerleave: (ev: PointerEvent) => any;
declare var onpointermove: (ev: PointerEvent) => any;
declare var onpointerout: (ev: PointerEvent) => any;
declare var onpointerover: (ev: PointerEvent) => any;
declare var onpointerup: (ev: PointerEvent) => any;
declare var onwheel: (ev: WheelEvent) => any;
declare var indexedDB: IDBFactory;
declare var msIndexedDB: IDBFactory;
declare function atob(encodedString: string): string;
declare function btoa(rawString: string): string;
declare function addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "compassneedscalibration", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "contextmenu", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "devicemotion", listener: (ev: DeviceMotionEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "deviceorientation", listener: (ev: DeviceOrientationEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "hashchange", listener: (ev: HashChangeEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSGestureChange", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSGestureDoubleTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSGestureEnd", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSGestureHold", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSGestureStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSGestureTap", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSInertiaStart", listener: (ev: MSGestureEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSPointerCancel", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSPointerDown", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSPointerEnter", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSPointerLeave", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSPointerMove", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSPointerOut", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSPointerOver", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "MSPointerUp", listener: (ev: MSPointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "orientationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "readystatechange", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "wheel", listener: (ev: WheelEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: string, listener: EventListener | { handleEvent(evt: Event): void; }, useCapture?: boolean): void;
interface ErrorEventHandler {
    (event: Event, source?: string, fileno?: number, columnNumber?: number): void;
    (event: string, source?: string, fileno?: number, columnNumber?: number): void;
}
interface PositionCallback {
    (position: Position): void;
}
interface PositionErrorCallback {
    (error: PositionError): void;
}
interface MediaQueryListListener {
    (mql: MediaQueryList): void;
}
interface MSLaunchUriCallback {
    (): void;
}
interface FrameRequestCallback {
    (time: number): void;
}
interface MSUnsafeFunctionCallback {
    (): any;
}
interface MSExecAtPriorityFunctionCallback {
    (...args: any[]): any;
}
interface MutationCallback {
    (mutations: MutationRecord[], observer: MutationObserver): void;
}
interface DecodeSuccessCallback {
    (decodedData: AudioBuffer): void;
}
interface DecodeErrorCallback {
    (): void;
}
interface FunctionStringCallback {
    (data: string): void;
}
declare var AppendMode: string;
declare var BiquadFilterType: string;
declare var ChannelCountMode: string;
declare var ChannelInterpretation: string;
declare var DistanceModelType: string;
declare var ExpandGranularity: string;
declare var MSWebViewPermissionState: string;
declare var MSWebViewPermissionType: string;
declare var OscillatorType: string;
declare var OverSampleType: string;
declare var PanningModelType: string;