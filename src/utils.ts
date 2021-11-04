export type TQuestion = { isRequired: boolean; questionText: string; }
export type TAnswer={questionId:string; responseText:string}
export type ISection={title:string; questionIds:string[]}
export interface ISurvey{
    surveyName:string;
    sections: ISection[];
}
