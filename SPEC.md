# Specification

* [Export Path](#export-path)
* [Export Tree](#export-tree)
* [Bin Option Format](#bin-option-format)

#### Export Path
+ 📄 [source/browser/DOM.js](source/browser/DOM.js)
  - `applyDragFileListListener`, `getElementAtViewport`, `getPathElementList`, `throttleByAnimationFrame`
+ 📄 [source/browser/net.js](source/browser/net.js)
  - `fetchLikeRequest`
+ 📄 [source/browser/resource.js](source/browser/resource.js)
  - `createDownload`, `createDownloadWithBlob`, `createDownloadWithObject`, `createDownloadWithString`, `loadImage`, `loadScript`, `loadText`
+ 📄 [source/browser/data/Blob.js](source/browser/data/Blob.js)
  - `Blob`, `parseBlobAsArrayBuffer`, `parseBlobAsDataURL`, `parseBlobAsText`
+ 📄 [source/browser/data/BlobPacket.js](source/browser/data/BlobPacket.js)
  - `packBlobPacket`, `parseBlobPacket`
+ 📄 [source/browser/font/fontGenerator.js](source/browser/font/fontGenerator.js)
  - `createFontGenerator`
+ 📄 [source/browser/font/fontGeneratorBitmap.js](source/browser/font/fontGeneratorBitmap.js)
  - `createFontGeneratorBitmap`
+ 📄 [source/browser/font/fontMapper.js](source/browser/font/fontMapper.js)
  - `createFontMapper`
+ 📄 [source/browser/font/fontRender.js](source/browser/font/fontRender.js)
  - `createFontRender`
+ 📄 [source/browser/font/fontRenderBitmap.js](source/browser/font/fontRenderBitmap.js)
  - `createFontRenderBitmap`
+ 📄 [source/browser/graphic/CanvasImageDataOperation.js](source/browser/graphic/CanvasImageDataOperation.js)
  - `crop`, `drawPixel`, `drawPixelLine`, `drawPixelLineList`, `floodFill`, `getPixelColor`, `replacePixelColor`, `scale`
+ 📄 [source/browser/graphic/Color.js](source/browser/graphic/Color.js)
  - `getHexFromRGB`, `getHexFromRGBA`, `getRGBAFromUint32RGBA`, `getUint32RGBA`
+ 📄 [source/browser/graphic/ImageData.js](source/browser/graphic/ImageData.js)
  - `applyCanvasElementExt`, `applyCanvasImageDataExt`, `applyImageElementExt`, `canvasElementToCanvasImageData`, `canvasImageDataToCanvasElement`, `createCanvasElement`, `createCanvasImageData`, `createImageElement`, `getQuickCanvas`, `getQuickContext2d`, `imageElementToCanvasElement`, `imageElementToCanvasImageData`
+ 📄 [source/browser/input/EnhancedEventProcessor.js](source/browser/input/EnhancedEventProcessor.js)
  - `createSwipeEnhancedEventProcessor`
+ 📄 [source/browser/input/KeyCommand.js](source/browser/input/KeyCommand.js)
  - `createKeyCommandHub`
+ 📄 [source/browser/input/PointerEvent.js](source/browser/input/PointerEvent.js)
  - `ENHANCED_POINTER_EVENT_TYPE`, `POINTER_EVENT_TYPE`, `applyEnhancedPointerEventListener`, `applyPointerEventListener`
+ 📄 [source/browser/module/HistoryStateStore.js](source/browser/module/HistoryStateStore.js)
  - `createHistoryStateStore`
+ 📄 [source/browser/module/MotionAutoTimer.js](source/browser/module/MotionAutoTimer.js)
  - `createInterpolationAutoTimer`, `createVectorAccumulator`
+ 📄 [source/browser/module/StateStorage.js](source/browser/module/StateStorage.js)
  - `createSyncStateStorage`
+ 📄 [source/common/check.js](source/common/check.js)
  - `isArrayLength`, `isBasicArray`, `isBasicFunction`, `isBasicObject`, `isInteger`, `isNumber`, `isObjectContain`, `isObjectKey`, `isOneOf`, `isString`
+ 📄 [source/common/compare.js](source/common/compare.js)
  - `compareString`, `compareStringLocale`
+ 📄 [source/common/error.js](source/common/error.js)
  - `catchAsync`, `catchSync`, `rethrowError`, `throwInfo`, `tryCall`
+ 📄 [source/common/format.js](source/common/format.js)
  - `binary`, `decimal`, `describe`, `escapeHTML`, `mediaTime`, `padTable`, `percent`, `removeInvalidCharXML`, `stringIndentLine`, `stringListJoinCamelCase`, `time`, `unescapeHTML`
+ 📄 [source/common/function.js](source/common/function.js)
  - `createInsideOutPromise`, `debounce`, `lossyAsync`, `throttle`, `withDelayArgvQueue`, `withRepeat`, `withRepeatAsync`, `withRetry`, `withRetryAsync`
+ 📄 [source/common/time.js](source/common/time.js)
  - `CLOCK_PER_SECOND`, `CLOCK_TO_SECOND`, `TIMESTAMP_START`, `cancelFrameUpdate`, `clock`, `createTimer`, `getTimestamp`, `now`, `requestFrameUpdate`, `setTimeoutAsync`, `setTimeoutPromise`
+ 📄 [source/common/verify.js](source/common/verify.js)
  - `arrayLength`, `basicArray`, `basicFunction`, `basicObject`, `integer`, `number`, `objectContain`, `objectKey`, `oneOf`, `string`
+ 📄 [source/common/data/ArrayBuffer.js](source/common/data/ArrayBuffer.js)
  - `concatArrayBuffer`, `decatArrayBuffer`, `fromString`, `isEqualArrayBuffer`, `toString`
+ 📄 [source/common/data/ArrayBufferPacket.js](source/common/data/ArrayBufferPacket.js)
  - `HEADER_BYTE_SIZE`, `MAX_PACKET_HEADER_SIZE`, `packArrayBufferHeader`, `packArrayBufferPacket`, `packChainArrayBufferPacket`, `parseArrayBufferHeader`, `parseArrayBufferPacket`, `parseChainArrayBufferPacket`
+ 📄 [source/common/data/CacheMap.js](source/common/data/CacheMap.js)
  - `createCache`, `createCacheMap`
+ 📄 [source/common/data/IdPool.js](source/common/data/IdPool.js)
  - `createIdPool`
+ 📄 [source/common/data/IndexBox.js](source/common/data/IndexBox.js)
  - `createIndexBox`
+ 📄 [source/common/data/LinkedList.js](source/common/data/LinkedList.js)
  - `createDoublyLinkedList`, `createNode`
+ 📄 [source/common/data/ListMap.js](source/common/data/ListMap.js)
  - `createListMap`
+ 📄 [source/common/data/SaveQueue.js](source/common/data/SaveQueue.js)
  - `createSaveQueue`
+ 📄 [source/common/data/SetMap.js](source/common/data/SetMap.js)
  - `createSetMap`, `getInvertSetMap`
+ 📄 [source/common/data/Toggle.js](source/common/data/Toggle.js)
  - `createToggle`
+ 📄 [source/common/data/function.js](source/common/data/function.js)
  - `getValueByKeyList`, `hashStringToNumber`, `reverseString`, `swapObfuscateString`, `tryParseJSONObject`
+ 📄 [source/common/geometry/Angle.js](source/common/geometry/Angle.js)
  - `DEGREE_TO_RADIAN`, `RADIAN_TO_DEGREE`, `fromDegree`, `getDegree`
+ 📄 [source/common/geometry/D2/BoundingRect.js](source/common/geometry/D2/BoundingRect.js)
  - `fromEmpty`, `fromPoint`, `fromWidget`, `fromWidgetList`, `getCenter`, `getUnion`, `isContainPoint`, `isIntersect`
+ 📄 [source/common/geometry/D2/Line.js](source/common/geometry/D2/Line.js)
  - `fromWidget`
+ 📄 [source/common/geometry/D2/Rect.js](source/common/geometry/D2/Rect.js)
  - `fromBoundingRect`, `fromEmpty`, `fromPoint`, `getCenter`, `getSize`, `getUnion`, `getUnionOfList`, `isContain`, `isContainPoint`, `isEmpty`, `isIntersect`
+ 📄 [source/common/geometry/D2/Vector.js](source/common/geometry/D2/Vector.js)
  - `abs`, `add`, `clamp`, `divide`, `fromAngleLength`, `fromOrigin`, `getAngle`, `getDist`, `getDistSq`, `getDotProduct`, `getLength`, `getLengthSq`, `getRotate`, `getRotateDelta`, `isZero`, `lerp`, `max`, `min`, `multiply`, `project`, `round`, `scale`, `sub`
+ 📄 [source/common/geometry/D2/Widget.js](source/common/geometry/D2/Widget.js)
  - `fromBoundingRect`, `fromLine`, `fromPoint`, `getBoundingBottom`, `getBoundingHeight`, `getBoundingLeft`, `getBoundingRight`, `getBoundingSize`, `getBoundingTop`, `getBoundingWidth`, `isContainBoundingRect`, `isInterceptBoundingRect`, `localBoundingRect`, `localPoint`, `round`
+ 📄 [source/common/immutable/Array.js](source/common/immutable/Array.js)
  - `arrayConcat`, `arrayDelete`, `arrayFindDelete`, `arrayFindMove`, `arrayFindPush`, `arrayFindSet`, `arrayInsert`, `arrayMatchDelete`, `arrayMatchMove`, `arrayMatchPush`, `arrayMove`, `arrayPop`, `arrayPush`, `arraySet`, `arrayShift`, `arraySplitChunk`, `arrayUnshift`
+ 📄 [source/common/immutable/Object.js](source/common/immutable/Object.js)
  - `objectDelete`, `objectDeleteUndefined`, `objectMerge`, `objectPickKey`, `objectSet`
+ 📄 [source/common/immutable/StateStore.js](source/common/immutable/StateStore.js)
  - `createEntryEnhancer`, `createStateStore`, `createStateStoreEnhanced`, `createStateStoreLite`, `createStoreStateSyncReducer`, `reducerFromMap`, `toReduxStore`
+ 📄 [source/common/immutable/check.js](source/common/immutable/check.js)
  - `isArrayShallowEqual`, `isCompactArrayShallowEqual`, `isObjectShallowEqual`
+ 📄 [source/common/immutable/function.js](source/common/immutable/function.js)
  - `createTransformCacheWithInfo`, `transformCache`
+ 📄 [source/common/math/base.js](source/common/math/base.js)
  - `addAbs`, `clamp`, `euclideanModulo`, `lerp`, `roundFloat`, `smoothstep`
+ 📄 [source/common/math/easing.js](source/common/math/easing.js)
  - `easeInCirc`, `easeInCubic`, `easeInExpo`, `easeInOutCirc`, `easeInOutCubic`, `easeInOutExpo`, `easeInOutQuad`, `easeInOutQuart`, `easeInOutQuint`, `easeInOutSine`, `easeInQuad`, `easeInQuart`, `easeInQuint`, `easeInSine`, `easeOutCirc`, `easeOutCubic`, `easeOutExpo`, `easeOutQuad`, `easeOutQuart`, `easeOutQuint`, `easeOutSine`, `linear`
+ 📄 [source/common/math/random.js](source/common/math/random.js)
  - `getRandomArrayBuffer`, `getRandomId`, `getRandomInt`, `getRandomIntList`
+ 📄 [source/common/math/sample.js](source/common/math/sample.js)
  - `getSample`, `getSampleRange`, `getSampleRate`
+ 📄 [source/common/module/AsyncTaskQueue.js](source/common/module/AsyncTaskQueue.js)
  - `createAsyncTaskQueue`
+ 📄 [source/common/module/BlockChart.js](source/common/module/BlockChart.js)
  - `getBlockBar`, `getBlockChart`
+ 📄 [source/common/module/Event.js](source/common/module/Event.js)
  - `createEventEmitter`, `createEventTarget`, `createHub`
+ 📄 [source/common/module/KeySelector.js](source/common/module/KeySelector.js)
  - `concatKeyFrag`, `createMultiKeySwitch`, `reduceKeySelector`
+ 📄 [source/common/module/LevenshteinDistance.js](source/common/module/LevenshteinDistance.js)
  - `getLevenshteinDistance`
+ 📄 [source/common/module/MIME.js](source/common/module/MIME.js)
  - `BASIC_EXTENSION_MAP`, `DEFAULT_MIME`, `getMIMETypeFromFileName`
+ 📄 [source/common/module/RouteMap.js](source/common/module/RouteMap.js)
  - `appendRouteMap`, `createRouteMap`, `findRouteFromMap`, `getRouteParam`, `getRouteParamAny`, `parseRouteToMap`, `parseRouteUrl`
+ 📄 [source/common/module/SemVer.js](source/common/module/SemVer.js)
  - `compareSemVer`, `parseSemVer`
+ 📄 [source/common/module/TaskRunner.js](source/common/module/TaskRunner.js)
  - `createTaskRunner`, `createTaskRunnerCluster`
+ 📄 [source/common/module/TimedLookup.js](source/common/module/TimedLookup.js)
  - `calcCode`, `generateCheckCode`, `generateLookupData`, `packDataArrayBuffer`, `parseDataArrayBuffer`, `verifyCheckCode`, `verifyOption`
+ 📄 [source/common/module/UpdateLoop.js](source/common/module/UpdateLoop.js)
  - `createUpdateLoop`, `createUpdater`
+ 📄 [source/common/module/Option/parser.js](source/common/module/Option/parser.js)
  - `createOptionParser`
+ 📄 [source/common/module/Option/preset.js](source/common/module/Option/preset.js)
  - `ConfigPreset`, `getOptionalFormatFlag`, `getOptionalFormatValue`
+ 📄 [source/common/module/StateSchema/ArrayOf.js](source/common/module/StateSchema/ArrayOf.js)
  - `ArrayOf`
+ 📄 [source/common/module/StateSchema/ArraySchema.js](source/common/module/StateSchema/ArraySchema.js)
  - `createArraySchema`
+ 📄 [source/common/module/StateSchema/ObjectAs.js](source/common/module/StateSchema/ObjectAs.js)
  - `ObjectAs`
+ 📄 [source/common/module/StateSchema/ObjectSchema.js](source/common/module/StateSchema/ObjectSchema.js)
  - `createObjectSchema`
+ 📄 [source/common/module/StateSchema/actMap.js](source/common/module/StateSchema/actMap.js)
  - `arrayActMap`, `objectActMap`
+ 📄 [source/common/module/StateSchema/function.js](source/common/module/StateSchema/function.js)
  - `SCHEMA_MARK`, `getActionReducer`, `getReducer`, `isSchemaObject`, `toStructJSONWithCheck`
+ 📄 [source/common/mutable/Object.js](source/common/mutable/Object.js)
  - `objectDepthFirstSearch`, `objectMergeDeep`, `objectSortKey`
+ 📄 [source/env/function.js](source/env/function.js)
  - `assert`, `getEndianness`
+ 📄 [source/env/global.js](source/env/global.js)
  - `getEnvironment`, `getGlobal`, `global`
+ 📄 [source/env/tryRequire.js](source/env/tryRequire.js)
  - `tryRequire`
+ 📄 [source/node/net.js](source/node/net.js)
  - `fetch`, `ping`, `requestAsync`, `urlToOption`
+ 📄 [source/node/resource.js](source/node/resource.js)
  - `loadJSON`, `loadLocalJSON`, `loadLocalScript`, `loadRemoteJSON`, `loadRemoteScript`, `loadScript`
+ 📄 [source/node/data/Buffer.js](source/node/data/Buffer.js)
  - `receiveBufferAsync`, `sendBufferAsync`, `toArrayBuffer`
+ 📄 [source/node/data/BufferPacket.js](source/node/data/BufferPacket.js)
  - `packBufferPacket`, `parseBufferPacket`
+ 📄 [source/node/data/LogQueue.js](source/node/data/LogQueue.js)
  - `createLogQueue`
+ 📄 [source/node/data/Stream.js](source/node/data/Stream.js)
  - `bufferToStream`, `pipeStreamAsync`
+ 📄 [source/node/data/function.js](source/node/data/function.js)
  - `getRandomBufferAsync`
+ 📄 [source/node/file/Compress.js](source/node/file/Compress.js)
  - `checkBloat`, `compressFile`, `compressFileList`
+ 📄 [source/node/file/Directory.js](source/node/file/Directory.js)
  - `copyDirectoryInfoTree`, `deleteDirectoryInfoTree`, `getDirectoryInfoTree`, `getDirectorySubInfoList`, `getFileList`, `moveDirectoryInfoTree`, `walkDirectoryInfoTree`, `walkDirectoryInfoTreeBottomUp`
+ 📄 [source/node/file/File.js](source/node/file/File.js)
  - `ERROR_STAT`, `FILE_TYPE`, `copyPath`, `createDirectory`, `deletePath`, `getPathStat`, `getPathTypeFromStat`, `movePath`
+ 📄 [source/node/file/Modify.js](source/node/file/Modify.js)
  - `copyDirectory`, `copyFile`, `deleteDirectory`, `deleteFile`, `modify`, `move`, `withTempDirectory`
+ 📄 [source/node/file/Watch.js](source/node/file/Watch.js)
  - `createFileWatcher`
+ 📄 [source/node/file/function.js](source/node/file/function.js)
  - `accessAsync`, `copyFileAsync`, `createPathPrefixLock`, `createReadStream`, `createReadlineFromFileAsync`, `createReadlineFromStreamAsync`, `createWriteStream`, `executableAsync`, `lstatAsync`, `mkdirAsync`, `nearestExistAsync`, `readFileAsync`, `readableAsync`, `readdirAsync`, `renameAsync`, `rmdirAsync`, `statAsync`, `toPosixPath`, `trimPathDepth`, `unlinkAsync`, `visibleAsync`, `writableAsync`, `writeFileAsync`
+ 📄 [source/node/module/EntityTag.js](source/node/module/EntityTag.js)
  - `getEntityTagByContentHash`, `getEntityTagByContentHashAsync`, `getWeakEntityTagByStat`
+ 📄 [source/node/module/FactDatabase.js](source/node/module/FactDatabase.js)
  - `INITIAL_FACT_INFO`, `createFactDatabase`, `tryDeleteExtraCache`, `tryLoadFactInfo`
+ 📄 [source/node/module/Logger.js](source/node/module/Logger.js)
  - `createLogger`, `createSimpleLogger`
+ 📄 [source/node/module/Option.js](source/node/module/Option.js)
  - `ConfigPresetNode`, `createOptionGetter`, `parseOptionMap`, `prepareOption`
+ 📄 [source/node/module/SafeWrite.js](source/node/module/SafeWrite.js)
  - `createSafeWriteStream`
+ 📄 [source/node/server/Server.js](source/node/server/Server.js)
  - `createRequestListener`, `createServer`
+ 📄 [source/node/server/commonHTML.js](source/node/server/commonHTML.js)
  - `COMMON_LAYOUT`, `COMMON_SCRIPT`, `COMMON_STYLE`, `DR_BROWSER_SCRIPT`
+ 📄 [source/node/server/function.js](source/node/server/function.js)
  - `autoTestServerPort`, `getUnusedPort`, `parseCookieString`
+ 📄 [source/node/server/Responder/Common.js](source/node/server/Responder/Common.js)
  - `createResponderLog`, `createResponderLogEnd`, `createResponderParseURL`, `createResponderSetHeaderHSTS`, `responderEnd`, `responderEndWithRedirect`, `responderEndWithStatusCode`, `responderSetHeaderCacheControlImmutable`
+ 📄 [source/node/server/Responder/RateLimit.js](source/node/server/Responder/RateLimit.js)
  - `createResponderCheckRateLimit`, `createResponderRateLimit`
+ 📄 [source/node/server/Responder/Router.js](source/node/server/Responder/Router.js)
  - `METHOD_MAP`, `appendRouteMap`, `createResponderRouter`, `createRouteMap`, `describeRouteMap`, `getRouteParam`, `getRouteParamAny`
+ 📄 [source/node/server/Responder/Send.js](source/node/server/Responder/Send.js)
  - `createResponderFavicon`, `prepareBufferData`, `prepareBufferDataAsync`, `responderSendBuffer`, `responderSendBufferCompress`, `responderSendBufferRange`, `responderSendJSON`, `responderSendStream`, `responderSendStreamCompress`, `responderSendStreamRange`
+ 📄 [source/node/server/Responder/ServeStatic.js](source/node/server/Responder/ServeStatic.js)
  - `createResponderBufferCache`, `createResponderServeStatic`
+ 📄 [source/node/server/WebSocket/Frame.js](source/node/server/WebSocket/Frame.js)
  - `createFrameReceiver`, `createFrameSender`
+ 📄 [source/node/server/WebSocket/WebSocket.js](source/node/server/WebSocket/WebSocket.js)
  - `createWebSocket`
+ 📄 [source/node/server/WebSocket/WebSocketClient.js](source/node/server/WebSocket/WebSocketClient.js)
  - `createWebSocketClient`
+ 📄 [source/node/server/WebSocket/WebSocketServer.js](source/node/server/WebSocket/WebSocketServer.js)
  - `enableWebSocketServer`
+ 📄 [source/node/server/WebSocket/WebSocketUpgradeRequest.js](source/node/server/WebSocket/WebSocketUpgradeRequest.js)
  - `createUpdateRequestListener`
+ 📄 [source/node/server/WebSocket/type.js](source/node/server/WebSocket/type.js)
  - `DATA_TYPE_MAP`, `DEFAULT_FRAME_LENGTH_LIMIT`, `DO_MASK_DATA`, `DO_NOT_MASK_DATA`, `FRAME_TYPE_CONFIG_MAP`, `WEB_SOCKET_EVENT_MAP`, `WEB_SOCKET_VERSION`, `getRequestKey`, `getRespondKey`
+ 📄 [source/node/system/DefaultOpen.js](source/node/system/DefaultOpen.js)
  - `getDefaultOpen`
+ 📄 [source/node/system/ExitListener.js](source/node/system/ExitListener.js)
  - `addExitListenerAsync`, `addExitListenerSync`, `clearExitListener`, `deleteExitListenerAsync`, `deleteExitListenerSync`
+ 📄 [source/node/system/NetworkAddress.js](source/node/system/NetworkAddress.js)
  - `getNetworkIPv4AddressList`
+ 📄 [source/node/system/REPL.js](source/node/system/REPL.js)
  - `startREPL`
+ 📄 [source/node/system/Run.js](source/node/system/Run.js)
  - `run`, `runQuiet`, `runSync`, `withCwd`
+ 📄 [source/node/system/Status.js](source/node/system/Status.js)
  - `describeSystemActivity`, `describeSystemMemory`, `describeSystemNetwork`, `describeSystemPlatform`, `describeSystemProcessor`, `describeSystemStatus`, `getProcessStatus`, `getSystemActivity`, `getSystemMemory`, `getSystemNetwork`, `getSystemPlatform`, `getSystemProcessor`, `getSystemStatus`

#### Export Tree
- **Browser**
  - **Data**
    - **Blob**
      - `Blob`, `parseBlobAsArrayBuffer`, `parseBlobAsDataURL`, `parseBlobAsText`
    - **BlobPacket**
      - `packBlobPacket`, `parseBlobPacket`
  - **Font**
    - `createFontGenerator`, `createFontGeneratorBitmap`, `createFontMapper`, `createFontRender`, `createFontRenderBitmap`
  - **Graphic**
    - **CanvasImageDataOperation**
      - `crop`, `drawPixel`, `drawPixelLine`, `drawPixelLineList`, `floodFill`, `getPixelColor`, `replacePixelColor`, `scale`
    - **Color**
      - `getHexFromRGB`, `getHexFromRGBA`, `getRGBAFromUint32RGBA`, `getUint32RGBA`
    - **ImageData**
      - `applyCanvasElementExt`, `applyCanvasImageDataExt`, `applyImageElementExt`, `canvasElementToCanvasImageData`, `canvasImageDataToCanvasElement`, `createCanvasElement`, `createCanvasImageData`, `createImageElement`, `getQuickCanvas`, `getQuickContext2d`, `imageElementToCanvasElement`, `imageElementToCanvasImageData`
  - **Input**
    - **EnhancedEventProcessor**
      - `createSwipeEnhancedEventProcessor`
    - **KeyCommand**
      - `createKeyCommandHub`
    - **PointerEvent**
      - `ENHANCED_POINTER_EVENT_TYPE`, `POINTER_EVENT_TYPE`, `applyEnhancedPointerEventListener`, `applyPointerEventListener`
  - **Module**
    - **HistoryStateStore**
      - `createHistoryStateStore`
    - **MotionAutoTimer**
      - `createInterpolationAutoTimer`, `createVectorAccumulator`
    - **StateStorage**
      - `createSyncStateStorage`
  - **DOM**
    - `applyDragFileListListener`, `getElementAtViewport`, `getPathElementList`, `throttleByAnimationFrame`
  - **Net**
    - `fetchLikeRequest`
  - **Resource**
    - `createDownload`, `createDownloadWithBlob`, `createDownloadWithObject`, `createDownloadWithString`, `loadImage`, `loadScript`, `loadText`
- **Common**
  - **Data**
    - **ArrayBuffer**
      - `concatArrayBuffer`, `decatArrayBuffer`, `fromString`, `isEqualArrayBuffer`, `toString`
    - **ArrayBufferPacket**
      - `HEADER_BYTE_SIZE`, `MAX_PACKET_HEADER_SIZE`, `packArrayBufferHeader`, `packArrayBufferPacket`, `packChainArrayBufferPacket`, `parseArrayBufferHeader`, `parseArrayBufferPacket`, `parseChainArrayBufferPacket`
    - **CacheMap**
      - `createCache`, `createCacheMap`
    - **IdPool**
      - `createIdPool`
    - **IndexBox**
      - `createIndexBox`
    - **LinkedList**
      - `createDoublyLinkedList`, `createNode`
    - **ListMap**
      - `createListMap`
    - **SaveQueue**
      - `createSaveQueue`
    - **SetMap**
      - `createSetMap`, `getInvertSetMap`
    - **Toggle**
      - `createToggle`
    - `getValueByKeyList`, `hashStringToNumber`, `reverseString`, `swapObfuscateString`, `tryParseJSONObject`
  - **Geometry**
    - **D2**
      - **BoundingRect**
        - `fromEmpty`, `fromPoint`, `fromWidget`, `fromWidgetList`, `getCenter`, `getUnion`, `isContainPoint`, `isIntersect`
      - **Line**
        - `fromWidget`
      - **Rect**
        - `fromBoundingRect`, `fromEmpty`, `fromPoint`, `getCenter`, `getSize`, `getUnion`, `getUnionOfList`, `isContain`, `isContainPoint`, `isEmpty`, `isIntersect`
      - **Vector**
        - `abs`, `add`, `clamp`, `divide`, `fromAngleLength`, `fromOrigin`, `getAngle`, `getDist`, `getDistSq`, `getDotProduct`, `getLength`, `getLengthSq`, `getRotate`, `getRotateDelta`, `isZero`, `lerp`, `max`, `min`, `multiply`, `project`, `round`, `scale`, `sub`
      - **Widget**
        - `fromBoundingRect`, `fromLine`, `fromPoint`, `getBoundingBottom`, `getBoundingHeight`, `getBoundingLeft`, `getBoundingRight`, `getBoundingSize`, `getBoundingTop`, `getBoundingWidth`, `isContainBoundingRect`, `isInterceptBoundingRect`, `localBoundingRect`, `localPoint`, `round`
    - **Angle**
      - `DEGREE_TO_RADIAN`, `RADIAN_TO_DEGREE`, `fromDegree`, `getDegree`
  - **Immutable**
    - **Array**
      - `arrayConcat`, `arrayDelete`, `arrayFindDelete`, `arrayFindMove`, `arrayFindPush`, `arrayFindSet`, `arrayInsert`, `arrayMatchDelete`, `arrayMatchMove`, `arrayMatchPush`, `arrayMove`, `arrayPop`, `arrayPush`, `arraySet`, `arrayShift`, `arraySplitChunk`, `arrayUnshift`
    - **Object**
      - `objectDelete`, `objectDeleteUndefined`, `objectMerge`, `objectPickKey`, `objectSet`
    - **StateStore**
      - `createEntryEnhancer`, `createStateStore`, `createStateStoreEnhanced`, `createStateStoreLite`, `createStoreStateSyncReducer`, `reducerFromMap`, `toReduxStore`
    - `isArrayShallowEqual`, `isCompactArrayShallowEqual`, `isObjectShallowEqual`, `createTransformCacheWithInfo`, `transformCache`
  - **Math**
    - `addAbs`, `clamp`, `euclideanModulo`, `lerp`, `roundFloat`, `smoothstep`, `easeInCirc`, `easeInCubic`, `easeInExpo`, `easeInOutCirc`, `easeInOutCubic`, `easeInOutExpo`, `easeInOutQuad`, `easeInOutQuart`, `easeInOutQuint`, `easeInOutSine`, `easeInQuad`, `easeInQuart`, `easeInQuint`, `easeInSine`, `easeOutCirc`, `easeOutCubic`, `easeOutExpo`, `easeOutQuad`, `easeOutQuart`, `easeOutQuint`, `easeOutSine`, `linear`, `getRandomArrayBuffer`, `getRandomId`, `getRandomInt`, `getRandomIntList`, `getSample`, `getSampleRange`, `getSampleRate`
  - **Module**
    - **Option**
      - `createOptionParser`, `ConfigPreset`, `getOptionalFormatFlag`, `getOptionalFormatValue`
    - **StateSchema**
      - **ArrayOf**
        - `ArrayOf`
      - **ArraySchema**
        - `createArraySchema`
      - **ObjectAs**
        - `ObjectAs`
      - **ObjectSchema**
        - `createObjectSchema`
      - `arrayActMap`, `objectActMap`, `SCHEMA_MARK`, `getActionReducer`, `getReducer`, `isSchemaObject`, `toStructJSONWithCheck`
    - **AsyncTaskQueue**
      - `createAsyncTaskQueue`
    - **BlockChart**
      - `getBlockBar`, `getBlockChart`
    - **Event**
      - `createEventEmitter`, `createEventTarget`, `createHub`
    - **KeySelector**
      - `concatKeyFrag`, `createMultiKeySwitch`, `reduceKeySelector`
    - **LevenshteinDistance**
      - `getLevenshteinDistance`
    - **MIME**
      - `BASIC_EXTENSION_MAP`, `DEFAULT_MIME`, `getMIMETypeFromFileName`
    - **RouteMap**
      - `appendRouteMap`, `createRouteMap`, `findRouteFromMap`, `getRouteParam`, `getRouteParamAny`, `parseRouteToMap`, `parseRouteUrl`
    - **SemVer**
      - `compareSemVer`, `parseSemVer`
    - **TaskRunner**
      - `createTaskRunner`, `createTaskRunnerCluster`
    - **TimedLookup**
      - `calcCode`, `generateCheckCode`, `generateLookupData`, `packDataArrayBuffer`, `parseDataArrayBuffer`, `verifyCheckCode`, `verifyOption`
    - **UpdateLoop**
      - `createUpdateLoop`, `createUpdater`
  - **Mutable**
    - **Object**
      - `objectDepthFirstSearch`, `objectMergeDeep`, `objectSortKey`
  - **Check**
    - `isArrayLength`, `isBasicArray`, `isBasicFunction`, `isBasicObject`, `isInteger`, `isNumber`, `isObjectContain`, `isObjectKey`, `isOneOf`, `isString`
  - **Compare**
    - `compareString`, `compareStringLocale`
  - **Error**
    - `catchAsync`, `catchSync`, `rethrowError`, `throwInfo`, `tryCall`
  - **Format**
    - `binary`, `decimal`, `describe`, `escapeHTML`, `mediaTime`, `padTable`, `percent`, `removeInvalidCharXML`, `stringIndentLine`, `stringListJoinCamelCase`, `time`, `unescapeHTML`
  - **Function**
    - `createInsideOutPromise`, `debounce`, `lossyAsync`, `throttle`, `withDelayArgvQueue`, `withRepeat`, `withRepeatAsync`, `withRetry`, `withRetryAsync`
  - **Time**
    - `CLOCK_PER_SECOND`, `CLOCK_TO_SECOND`, `TIMESTAMP_START`, `cancelFrameUpdate`, `clock`, `createTimer`, `getTimestamp`, `now`, `requestFrameUpdate`, `setTimeoutAsync`, `setTimeoutPromise`
  - **Verify**
    - `arrayLength`, `basicArray`, `basicFunction`, `basicObject`, `integer`, `number`, `objectContain`, `objectKey`, `oneOf`, `string`
- **Env**
  - `assert`, `getEndianness`, `getEnvironment`, `getGlobal`, `global`, `tryRequire`
- **Node**
  - **Data**
    - **Buffer**
      - `receiveBufferAsync`, `sendBufferAsync`, `toArrayBuffer`
    - **BufferPacket**
      - `packBufferPacket`, `parseBufferPacket`
    - **LogQueue**
      - `createLogQueue`
    - **Stream**
      - `bufferToStream`, `pipeStreamAsync`
    - `getRandomBufferAsync`
  - **File**
    - **Compress**
      - `checkBloat`, `compressFile`, `compressFileList`
    - **Directory**
      - `copyDirectoryInfoTree`, `deleteDirectoryInfoTree`, `getDirectoryInfoTree`, `getDirectorySubInfoList`, `getFileList`, `moveDirectoryInfoTree`, `walkDirectoryInfoTree`, `walkDirectoryInfoTreeBottomUp`
    - **File**
      - `ERROR_STAT`, `FILE_TYPE`, `copyPath`, `createDirectory`, `deletePath`, `getPathStat`, `getPathTypeFromStat`, `movePath`
    - **Modify**
      - `copyDirectory`, `copyFile`, `deleteDirectory`, `deleteFile`, `modify`, `move`, `withTempDirectory`
    - **Watch**
      - `createFileWatcher`
    - `accessAsync`, `copyFileAsync`, `createPathPrefixLock`, `createReadStream`, `createReadlineFromFileAsync`, `createReadlineFromStreamAsync`, `createWriteStream`, `executableAsync`, `lstatAsync`, `mkdirAsync`, `nearestExistAsync`, `readFileAsync`, `readableAsync`, `readdirAsync`, `renameAsync`, `rmdirAsync`, `statAsync`, `toPosixPath`, `trimPathDepth`, `unlinkAsync`, `visibleAsync`, `writableAsync`, `writeFileAsync`
  - **Module**
    - **EntityTag**
      - `getEntityTagByContentHash`, `getEntityTagByContentHashAsync`, `getWeakEntityTagByStat`
    - **FactDatabase**
      - `INITIAL_FACT_INFO`, `createFactDatabase`, `tryDeleteExtraCache`, `tryLoadFactInfo`
    - **Logger**
      - `createLogger`, `createSimpleLogger`
    - **Option**
      - `ConfigPresetNode`, `createOptionGetter`, `parseOptionMap`, `prepareOption`
    - **SafeWrite**
      - `createSafeWriteStream`
  - **Server**
    - **Responder**
      - **Common**
        - `createResponderLog`, `createResponderLogEnd`, `createResponderParseURL`, `createResponderSetHeaderHSTS`, `responderEnd`, `responderEndWithRedirect`, `responderEndWithStatusCode`, `responderSetHeaderCacheControlImmutable`
      - **RateLimit**
        - `createResponderCheckRateLimit`, `createResponderRateLimit`
      - **Router**
        - `METHOD_MAP`, `appendRouteMap`, `createResponderRouter`, `createRouteMap`, `describeRouteMap`, `getRouteParam`, `getRouteParamAny`
      - **Send**
        - `createResponderFavicon`, `prepareBufferData`, `prepareBufferDataAsync`, `responderSendBuffer`, `responderSendBufferCompress`, `responderSendBufferRange`, `responderSendJSON`, `responderSendStream`, `responderSendStreamCompress`, `responderSendStreamRange`
      - **ServeStatic**
        - `createResponderBufferCache`, `createResponderServeStatic`
    - **WebSocket**
      - **Frame**
        - `createFrameReceiver`, `createFrameSender`
      - **WebSocket**
        - `createWebSocket`
      - **WebSocketClient**
        - `createWebSocketClient`
      - **WebSocketServer**
        - `enableWebSocketServer`
      - **WebSocketUpgradeRequest**
        - `createUpdateRequestListener`
      - `DATA_TYPE_MAP`, `DEFAULT_FRAME_LENGTH_LIMIT`, `DO_MASK_DATA`, `DO_NOT_MASK_DATA`, `FRAME_TYPE_CONFIG_MAP`, `WEB_SOCKET_EVENT_MAP`, `WEB_SOCKET_VERSION`, `getRequestKey`, `getRespondKey`
    - **Server**
      - `createRequestListener`, `createServer`
    - **CommonHTML**
      - `COMMON_LAYOUT`, `COMMON_SCRIPT`, `COMMON_STYLE`, `DR_BROWSER_SCRIPT`
    - **Function**
      - `autoTestServerPort`, `getUnusedPort`, `parseCookieString`
  - **System**
    - **DefaultOpen**
      - `getDefaultOpen`
    - **ExitListener**
      - `addExitListenerAsync`, `addExitListenerSync`, `clearExitListener`, `deleteExitListenerAsync`, `deleteExitListenerSync`
    - **NetworkAddress**
      - `getNetworkIPv4AddressList`
    - **REPL**
      - `startREPL`
    - **Run**
      - `run`, `runQuiet`, `runSync`, `withCwd`
    - **Status**
      - `describeSystemActivity`, `describeSystemMemory`, `describeSystemNetwork`, `describeSystemPlatform`, `describeSystemProcessor`, `describeSystemStatus`, `getProcessStatus`, `getSystemActivity`, `getSystemMemory`, `getSystemNetwork`, `getSystemPlatform`, `getSystemProcessor`, `getSystemStatus`
  - **Net**
    - `fetch`, `ping`, `requestAsync`, `urlToOption`
  - **Resource**
    - `loadJSON`, `loadLocalJSON`, `loadLocalScript`, `loadRemoteJSON`, `loadRemoteScript`, `loadScript`

#### Bin Option Format
📄 [source-bin/option.js](source-bin/option.js)
> ```
> CLI Usage:
>   --config -c [OPTIONAL] [ARGUMENT=1]
>       # from JSON: set to 'path/to/config.json'
>       # from ENV: set to 'env'
>   --version -v [OPTIONAL] [ARGUMENT=0+]
>       set to enable
>   --help -h [OPTIONAL] [ARGUMENT=0+]
>       show help, or request better human readable output
>   --quiet -q [OPTIONAL] [ARGUMENT=0+]
>       reduce most output
>   --echo [OPTIONAL] [ARGUMENT=0+]
>   --cat [OPTIONAL] [ARGUMENT=0+]
>   --write [OPTIONAL] [ARGUMENT=1]
>   --append [OPTIONAL] [ARGUMENT=1]
>   --open --o [OPTIONAL] [ARGUMENT=0-1]
>   --status --s [OPTIONAL]
>   --file-list --ls [OPTIONAL] [ARGUMENT=0-1]
>   --file-list-all --ls-R [OPTIONAL] [ARGUMENT=0-1]
>   --file-create-directory --mkdir [OPTIONAL] [ARGUMENT=0+]
>   --file-modify-copy --cp [OPTIONAL] [ARGUMENT=2]
>   --file-modify-move --mv [OPTIONAL] [ARGUMENT=2]
>   --file-modify-delete --rm [OPTIONAL] [ARGUMENT=0+]
>   --file-merge --merge [OPTIONAL] [ARGUMENT=2+]
>   --fetch --f [OPTIONAL] [ARGUMENT=1]
>   --server-serve-static --sss [OPTIONAL]
>   --server-serve-static-simple --ssss [OPTIONAL]
>   --server-websocket-group --swg [OPTIONAL]
>   --server-test-connection --stc [OPTIONAL]
>   --server-cache-http-proxy --schp [OPTIONAL] [ARGUMENT=1-2]
>   --timed-lookup-file-generate --tlfg [OPTIONAL] [ARGUMENT=0-4]
>   --timed-lookup-check-code-generate --tlccg [OPTIONAL] [ARGUMENT=0-1]
>   --timed-lookup-check-code-verify --tlccv [OPTIONAL] [ARGUMENT=1-2]
>   --hostname -H [OPTIONAL] [ARGUMENT=1]
>       for 'server'
>   --port -P [OPTIONAL] [ARGUMENT=1]
>       for 'server'
>   --root -R [OPTIONAL] [ARGUMENT=1]
>       for 'server-serve-static'
>   --input-file -I [OPTIONAL] [ARGUMENT=1]
>       for 'timed-lookup-check-code-generate', 'timed-lookup-check-code-verify'
>   --output-file -O [OPTIONAL] [ARGUMENT=1]
>       for 'fetch', 'timed-lookup-file-generate'
> ENV Usage:
>   "
>     #!/usr/bin/env bash
>     export DR_JS_CONFIG="[OPTIONAL] [ARGUMENT=1]"
>     export DR_JS_VERSION="[OPTIONAL] [ARGUMENT=0+]"
>     export DR_JS_HELP="[OPTIONAL] [ARGUMENT=0+]"
>     export DR_JS_QUIET="[OPTIONAL] [ARGUMENT=0+]"
>     export DR_JS_ECHO="[OPTIONAL] [ARGUMENT=0+]"
>     export DR_JS_CAT="[OPTIONAL] [ARGUMENT=0+]"
>     export DR_JS_WRITE="[OPTIONAL] [ARGUMENT=1]"
>     export DR_JS_APPEND="[OPTIONAL] [ARGUMENT=1]"
>     export DR_JS_OPEN="[OPTIONAL] [ARGUMENT=0-1]"
>     export DR_JS_STATUS="[OPTIONAL]"
>     export DR_JS_FILE_LIST="[OPTIONAL] [ARGUMENT=0-1]"
>     export DR_JS_FILE_LIST_ALL="[OPTIONAL] [ARGUMENT=0-1]"
>     export DR_JS_FILE_CREATE_DIRECTORY="[OPTIONAL] [ARGUMENT=0+]"
>     export DR_JS_FILE_MODIFY_COPY="[OPTIONAL] [ARGUMENT=2]"
>     export DR_JS_FILE_MODIFY_MOVE="[OPTIONAL] [ARGUMENT=2]"
>     export DR_JS_FILE_MODIFY_DELETE="[OPTIONAL] [ARGUMENT=0+]"
>     export DR_JS_FILE_MERGE="[OPTIONAL] [ARGUMENT=2+]"
>     export DR_JS_FETCH="[OPTIONAL] [ARGUMENT=1]"
>     export DR_JS_SERVER_SERVE_STATIC="[OPTIONAL]"
>     export DR_JS_SERVER_SERVE_STATIC_SIMPLE="[OPTIONAL]"
>     export DR_JS_SERVER_WEBSOCKET_GROUP="[OPTIONAL]"
>     export DR_JS_SERVER_TEST_CONNECTION="[OPTIONAL]"
>     export DR_JS_SERVER_CACHE_HTTP_PROXY="[OPTIONAL] [ARGUMENT=1-2]"
>     export DR_JS_TIMED_LOOKUP_FILE_GENERATE="[OPTIONAL] [ARGUMENT=0-4]"
>     export DR_JS_TIMED_LOOKUP_CHECK_CODE_GENERATE="[OPTIONAL] [ARGUMENT=0-1]"
>     export DR_JS_TIMED_LOOKUP_CHECK_CODE_VERIFY="[OPTIONAL] [ARGUMENT=1-2]"
>     export DR_JS_HOSTNAME="[OPTIONAL] [ARGUMENT=1]"
>     export DR_JS_PORT="[OPTIONAL] [ARGUMENT=1]"
>     export DR_JS_ROOT="[OPTIONAL] [ARGUMENT=1]"
>     export DR_JS_INPUT_FILE="[OPTIONAL] [ARGUMENT=1]"
>     export DR_JS_OUTPUT_FILE="[OPTIONAL] [ARGUMENT=1]"
>   "
> JSON Usage:
>   {
>     "drJsConfig": [ "[OPTIONAL] [ARGUMENT=1]" ],
>     "drJsVersion": [ "[OPTIONAL] [ARGUMENT=0+]" ],
>     "drJsHelp": [ "[OPTIONAL] [ARGUMENT=0+]" ],
>     "drJsQuiet": [ "[OPTIONAL] [ARGUMENT=0+]" ],
>     "drJsEcho": [ "[OPTIONAL] [ARGUMENT=0+]" ],
>     "drJsCat": [ "[OPTIONAL] [ARGUMENT=0+]" ],
>     "drJsWrite": [ "[OPTIONAL] [ARGUMENT=1]" ],
>     "drJsAppend": [ "[OPTIONAL] [ARGUMENT=1]" ],
>     "drJsOpen": [ "[OPTIONAL] [ARGUMENT=0-1]" ],
>     "drJsStatus": [ "[OPTIONAL]" ],
>     "drJsFileList": [ "[OPTIONAL] [ARGUMENT=0-1]" ],
>     "drJsFileListAll": [ "[OPTIONAL] [ARGUMENT=0-1]" ],
>     "drJsFileCreateDirectory": [ "[OPTIONAL] [ARGUMENT=0+]" ],
>     "drJsFileModifyCopy": [ "[OPTIONAL] [ARGUMENT=2]" ],
>     "drJsFileModifyMove": [ "[OPTIONAL] [ARGUMENT=2]" ],
>     "drJsFileModifyDelete": [ "[OPTIONAL] [ARGUMENT=0+]" ],
>     "drJsFileMerge": [ "[OPTIONAL] [ARGUMENT=2+]" ],
>     "drJsFetch": [ "[OPTIONAL] [ARGUMENT=1]" ],
>     "drJsServerServeStatic": [ "[OPTIONAL]" ],
>     "drJsServerServeStaticSimple": [ "[OPTIONAL]" ],
>     "drJsServerWebsocketGroup": [ "[OPTIONAL]" ],
>     "drJsServerTestConnection": [ "[OPTIONAL]" ],
>     "drJsServerCacheHttpProxy": [ "[OPTIONAL] [ARGUMENT=1-2]" ],
>     "drJsTimedLookupFileGenerate": [ "[OPTIONAL] [ARGUMENT=0-4]" ],
>     "drJsTimedLookupCheckCodeGenerate": [ "[OPTIONAL] [ARGUMENT=0-1]" ],
>     "drJsTimedLookupCheckCodeVerify": [ "[OPTIONAL] [ARGUMENT=1-2]" ],
>     "drJsHostname": [ "[OPTIONAL] [ARGUMENT=1]" ],
>     "drJsPort": [ "[OPTIONAL] [ARGUMENT=1]" ],
>     "drJsRoot": [ "[OPTIONAL] [ARGUMENT=1]" ],
>     "drJsInputFile": [ "[OPTIONAL] [ARGUMENT=1]" ],
>     "drJsOutputFile": [ "[OPTIONAL] [ARGUMENT=1]" ],
>   }
> ```
