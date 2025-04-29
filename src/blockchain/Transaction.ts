import { SHA256 } from 'crypto-js';

export class Transaction {
  fromAddress: string | null;
  toAddress: string;
  amount: number;
  timestamp: number;
  data: any;
  signature?: string;

  constructor(
    fromAddress: string | null,
    toAddress: string,
    amount: number,
    data: any = {}
  ) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
    this.timestamp = Date.now();
    this.data = data;
  }

  calculateHash(): string {
    return SHA256(
      this.fromAddress +
      this.toAddress +
      this.amount +
      this.timestamp +
      JSON.stringify(this.data)
    ).toString();
  }

  signTransaction(signingKey: any): void {
    if (!signingKey) {
      throw new Error('No signing key provided');
    }

    const hashTx = this.calculateHash();
    this.signature = signingKey.sign(hashTx, 'base64').toString();
  }

  isValid(): boolean {
    if (this.fromAddress === null) return true;

    if (!this.signature || this.signature.length === 0) {
      throw new Error('No signature in this transaction');
    }

    // In a real application, you would verify the signature
    // For simplicity, we're just checking if it exists
    return true;
  }
}