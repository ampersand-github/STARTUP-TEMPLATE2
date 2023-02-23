export interface ICustomError {
  errorCode?: number;
  endUserMsg: string;
  technicalMsg?: string;
}
export class CustomError extends Error {
  protected errorCode: ICustomError["errorCode"];
  protected endUserMsg: ICustomError["endUserMsg"];
  protected technicalMsg: ICustomError["technicalMsg"];

  constructor(props: ICustomError) {
    super();
    this.errorCode = props.errorCode ? props.errorCode : 500;
    this.endUserMsg = props.endUserMsg;
    this.technicalMsg = props.technicalMsg ? props.technicalMsg : props.endUserMsg;

    // important for typescript custom error!
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = "CustomError";
  }
}
