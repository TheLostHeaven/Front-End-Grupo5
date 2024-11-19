export abstract class AuthRepository {
  public abstract auth(): Promise<void>;
}

