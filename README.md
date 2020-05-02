# simple-qnamaker

Make it simple to call QnAMaker

[QnAMaker](https://www.qnamaker.ai/) is a cloud service powered by Microsoft. It can build, train and publish a sophisticated bot using FAQ pages, support websites, product manuals, SharePoint documents or editorial content through an easy-to-use UI or via REST APIs.

## Install

```shell
npm install simple-qnamaker
```

## Run

```ts
import simpleQnAMaker from 'simple-qnamaker'

const qa = new simpleQnAMaker({
  knowledgeBaseId: '51762d0d-96b0-4888-82f3-a0230bbb8b3d'
  endpointKey    : 'bc138303-260a-42fa-b4d4-3d69db88922d'
  host           : 'https://juzibot-investment.azurewebsites.net/qnamaker'
})

const answer = qa('hello')
console.log(answer)
```

Type of the answer:

```ts
// answer is the qnamaker result

/**
 * An individual answer returned by a call to the QnA Maker Service.
 */
export interface QnAMakerResult {
    /**
     * The list of questions indexed in the QnA Service
     *  for the given answer. (If any)
     */
    questions?: string[];

    /**
     * Answer from the knowledge base.
     */
    answer: string;

    /**
     * Confidence on a scale from 0.0 to 1.0 that the answer matches the users intent.
     */
    score: number;

    /**
     * Metadata associated with the answer (If any)
     */
    metadata?: any;

    /**
     * The source from which the QnA was extracted (If any)
     */
    source?: string;

    /**
     * The index of the answer in the knowledge base.
     *  V3 uses 'qnaId', V4 uses 'id'. (If any)
     */
    id?: number;

    /**
     * Context for multi-turn responses.
     */
    context?: QnAResponseContext;
}
```
