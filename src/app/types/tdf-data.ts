export class TdfData {
  viread: boolean;
  truvada: boolean;
  truvadaPrep: boolean;
  atripla: boolean;
  complera: boolean;
  stribild: boolean;
  reason: string;
  startDate: string;
  stopDate: string;
  osteoporosis: boolean;
  osteopenia: boolean;
  osteomalacia: boolean;
  boneFractures: boolean;
  boneBreaks: boolean;
  toothLoss: boolean;
  other: boolean;
  otherBoneInjury: string;
  chronicKidneyDisease: string;
  endStageRenalDisease: string;
  fanconiSyndrome: string;
  renalTubuleDamage: string;
  otherKidneyInjury: string;
  doctorName: string;
  doctorAddress: string;
  doctorPhoneNumber: string;

  constructor() {
    this.viread = false;
    this.truvada=false;
    this.truvadaPrep=false;
    this.atripla=false;
    this.complera=false;
    this.stribild=false;
    this.reason='';
    this.startDate='';
    this.stopDate='';
    this.osteoporosis=false;
    this.osteopenia=false;
    this.osteomalacia=false;
    this.boneFractures=false;
    this.boneBreaks=false;
    this.toothLoss=false;
    this.other=false;
    this.otherBoneInjury='';
    this.chronicKidneyDisease='';
    this.endStageRenalDisease='';
    this.fanconiSyndrome='';
    this.renalTubuleDamage='';
    this.otherKidneyInjury='';
    this.doctorName='';
    this.doctorAddress='';
    this.doctorPhoneNumber='';
  }
}
