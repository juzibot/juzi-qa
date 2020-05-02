import {
  QnAMaker,
  QnAMakerEndpoint,
  QnAMakerResult,
} from 'botbuilder-ai'

export async function simpleQnAMaker (option: QnAMakerEndpoint) {

  const qnaMaker = new QnAMaker({
    endpointKey     : option.endpointKey,
    host            : option.host,
    knowledgeBaseId : option.knowledgeBaseId,
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

export default { simpleQnAMaker }
