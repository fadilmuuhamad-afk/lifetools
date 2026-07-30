export type ProtectPdfOptions = {
    file: File;

    /**
     * Password yang diminta saat membuka PDF.
     */
    userPassword: string;

    /**
     * Password administrator PDF.
     * Jika tidak diisi, nanti akan menggunakan
     * nilai yang sama dengan userPassword.
     */
    ownerPassword?: string;
};