import {
  QnAMaker,
  QnAMakerEndpoint,
  QnAMakerResult,
} from 'botbuilder-ai'

export async function juziQA (option: QnAMakerEndpoint) {

  const qnaMaker = new QnAMaker({
    knowledgeBaseId: option.knowledgeBaseId,
    endpointKey: option.endpointKey,
    host: option.host,
  })

  return async (text: string): Promise<QnAMakerResult[]> => {

    // only for Azure Qnamaker construct the parameter
    const context: any = {
      activity: {
        text: text,
      },
      sendActivity: () => {},
    }

    const answer = await qnaMaker.getAnswers(context)

    return answer
  }
}

export default { juziQA }
