const sendMsg = useCallback(
    async (data: MessageRequestData, extra?: object) => {
        return sendMessageHandle(data, sendMessage, extra);
    },
    [sendMessageHandle]
);
const reSendMsg = useCallback(
    async (data: MessageRequestData, extra?: object) => {
        return sendMessageHandle(data, reSendMessage, extra, 'resend');
    },
    [sendMessageHandle]
);
const onStopHandle = useCallback(
    () => {
        abortController && abortController.abort();
    },
    [abortController]
);
