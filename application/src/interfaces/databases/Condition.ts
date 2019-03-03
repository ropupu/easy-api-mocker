export interface Condition {
  column: string;
  operator: FirebaseFirestore.WhereFilterOp;
  value: any;
}