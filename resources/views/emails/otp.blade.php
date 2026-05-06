<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Password Reset OTP</title>
</head>
<body style="margin:0; padding:0; background:#f4f6f8; font-family: Arial, sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8; padding:20px 0;">
        <tr>
            <td align="center">

                <!-- Main Container -->
                <table width="500" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; padding:30px;">
                    
                    <!-- Header -->
                    <tr>
                        <td align="center" style="font-size:24px; font-weight:bold; color:#333;">
                            🔐 Password Reset
                        </td>
                    </tr>

                    <!-- Spacer -->
                    <tr><td height="20"></td></tr>

                    <!-- Message -->
                    <tr>
                        <td style="font-size:16px; color:#555; text-align:center;">
                            You requested to reset your password.<br>
                            Use the OTP below to continue:
                        </td>
                    </tr>

                    <!-- Spacer -->
                    <tr><td height="25"></td></tr>

                    <!-- OTP Box -->
                    <tr>
                        <td align="center">
                            <div style="
                                display:inline-block;
                                padding:15px 30px;
                                font-size:28px;
                                letter-spacing:5px;
                                font-weight:bold;
                                background:#f1f5ff;
                                color:#2d5bff;
                                border-radius:8px;
                            ">
                                {{ $otp }}
                            </div>
                        </td>
                    </tr>

                    <!-- Spacer -->
                    <tr><td height="25"></td></tr>

                    <!-- Expiry -->
                    <tr>
                        <td style="font-size:14px; color:#888; text-align:center;">
                            This OTP will expire in <strong>10 minutes</strong>.
                        </td>
                    </tr>

                    <!-- Spacer -->
                    <tr><td height="30"></td></tr>

                    <!-- Warning -->
                    <tr>
                        <td style="font-size:13px; color:#999; text-align:center;">
                            If you did not request this, please ignore this email.
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr><td height="20"></td></tr>
                    <tr>
                        <td style="font-size:12px; color:#ccc; text-align:center;">
                            © {{ date('Y') }} Ensinor. All rights reserved.
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>
</html>