
/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */

declare const enum LCD_COLOR {
    WHITE,
    BLACK,
    BLUE,
    BRED,
    GRED,
    GBLUE,
    RED,
    MAGENTA,
    GREEN,
    CYAN,
    YELLOW,
    BROWN,
    BRRED,
    GRAY,
}

/**
 * 自定义图形块
 */
//% weight=100 color=#436eee icon="\uf108"
namespace serialLcd {
    /**
     * Clear the lcd screen
     * param Color:0 to 65535
     */
    //% block="Clear Lcd Screen:|Color %Color"
    //% Color.min=0 Color.max=65535
    export function ClearScreen(Color: number): void {
        serial.writeString("cls " + Color.toString() + "\r\n");
    }

    /**
     * Display BMP file in TF card
     * X:1 to 220
     * Y:1 to 176
     * BMP name:BMP file name
     */
    //% block="Display BMP|X %Xchar|Y %Ychar|BMP name %ch"
    //% Xchar.min=1 Xchar.max=220 Ychar.min=1 Ychar.max=176 
    export function DisplayBMP(Xchar: number, Ychar: number, ch: string): void {
        let stringlen = ch.length;
        if (stringlen)
            serial.writeString("pic " + Xchar.toString() + "," + Ychar.toString() + "," + ch + "\r\n");
    }

    //% block="Show 16 String|X %Xchar|Y %Ychar|foreColor %fColor|backColor %bColor|string %ch"
    //% Xchar.min=1 Xchar.max=220 Ychar.min=1 Ychar.max=176 
    //% fColor.min=0 fColor.max=65535 bColor.min=0 bColor.max=65535
    export function Dis16String(Xchar: number, Ychar: number, fColor: number, bColor: number, ch: string): void {
        serial.writeString("ds16 " + Xchar.toString() + "," + Ychar.toString() + "," + fColor.toString() + "," + bColor.toString() + "," + ch + "\r\n");
    }

    //% block="Show 24 String|X %Xchar|Y %Ychar|foreColor %fColor|backColor %bColor|string %ch"
    //% Xchar.min=1 Xchar.max=220 Ychar.min=1 Ychar.max=176 
    //% fColor.min=0 fColor.max=65535 bColor.min=0 bColor.max=65535
    export function Dis24String(Xchar: number, Ychar: number, fColor: number, bColor: number, ch: string): void {
        serial.writeString("ds24 " + Xchar.toString() + "," + Ychar.toString() + "," + fColor.toString() + "," + bColor.toString() + "," + ch + "\r\n");
    }

    //% block="Show 32 String|X %Xchar|Y %Ychar|foreColor %fColor|backColor %bColor|string %ch"
    //% Xchar.min=1 Xchar.max=220 Ychar.min=1 Ychar.max=176 
    //% fColor.min=0 fColor.max=65535 bColor.min=0 bColor.max=65535
    export function Dis32String(Xchar: number, Ychar: number, fColor: number, bColor: number, ch: string): void {
        serial.writeString("ds32 " + Xchar.toString() + "," + Ychar.toString() + "," + fColor.toString() + "," + bColor.toString() + "," + ch + "\r\n");
    }

    //% block="Show 64 String|X %Xchar|Y %Ychar|foreColor %fColor|backColor %bColor|string %ch"
    //% Xchar.min=1 Xchar.max=220 Ychar.min=1 Ychar.max=176 
    //% fColor.min=0 fColor.max=65535 bColor.min=0 bColor.max=65535
    export function Dis64String(Xchar: number, Ychar: number, fColor: number, bColor: number, ch: string): void {
        serial.writeString("ds64 " + Xchar.toString() + "," + Ychar.toString() + "," + fColor.toString() + "," + bColor.toString() + "," + ch + "\r\n");
    }

    //% block="Draw fill|Xstart %Xstart2|Ystart %Ystart2|Width %Xend2|Height %Yend2|Color %Color"
    //% Xstart2.min=1 Xstart2.max=160 Ystart2.min=1 Ystart2.max=128 
    //% Xend2.min=1 Xend2.max=160 Yend2.min=1 Yend2.max=128
    //% Color.min=0 Color.max=65535
    export function DrawFill(Xstart2: number, Ystart2: number, Xend2: number, Yend2: number, Color: number): void {
        serial.writeString("fill " + Xstart2.toString() + "," + Ystart2.toString() + "," + Xend2.toString() + "," + Yend2.toString() + "," + Color.toString() + "\r\n");
    }

    //% block="Draw Line|Xstart %Xstart|Ystart %Ystart|Xend %Xend|Yend %Yend|Color %Color"
    //% Xstart.min=1 Xstart.max=160 Ystart.min=1 Ystart.max=128
    //% Xend.min=1 Xend.max=160 Yend.min=1 Yend.max=128
    //% Color.min=0 Color.max=65535
    export function DrawLine(Xstart: number, Ystart: number, Xend: number, Yend: number, Color: number): void {
        serial.writeString("line " + Xstart.toString() + "," + Ystart.toString() + "," + Xend.toString() + "," + Yend.toString() + "," + Color.toString() + "\r\n");
    }

    //% block="Draw Rectangle|Xstart %Xstart2|Ystart %Ystart2|Width %Xend2|Height %Yend2|Color %Color"
    //% Xstart2.min=1 Xstart2.max=160 Ystart2.min=1 Ystart2.max=128 
    //% Xend2.min=1 Xend2.max=160 Yend2.min=1 Yend2.max=128
    //% Color.min=0 Color.max=65535
    export function DrawRectangle(Xstart2: number, Ystart2: number, Xend2: number, Yend2: number, Color: number): void {
        serial.writeString("rect " + Xstart2.toString() + "," + Ystart2.toString() + "," + Xend2.toString() + "," + Yend2.toString() + "," + Color.toString() + "\r\n");
    }

    //% block="Draw Circle|X_Center %X_Center|Y_Center %Y_Center|Radius %Radius|Color %Color"
    //% X_Center.min=1 X_Center.max=160 Y_Center.min=1 Y_Center.max=128
    //% Radius.min=0 Radius.max=160
    //% Color.min=0 Color.max=65535
    export function DrawCircle(X_Center: number, Y_Center: number, Radius: number, Color: number): void {
        serial.writeString("cir " + X_Center.toString() + "," + Y_Center.toString() + "," + Radius.toString() + "," + Color.toString() + "\r\n");
    }

    //% block="Draw Circle fill|X_Center %X_Center|Y_Center %Y_Center|Radius %Radius|Color %Color"
    //% X_Center.min=1 X_Center.max=160 Y_Center.min=1 Y_Center.max=128
    //% Radius.min=0 Radius.max=160
    //% Color.min=0 Color.max=65535
    export function DrawCircleFill(X_Center: number, Y_Center: number, Radius: number, Color: number): void {
        serial.writeString("cirf " + X_Center.toString() + "," + Y_Center.toString() + "," + Radius.toString() + "," + Color.toString() + "\r\n");
    }

    /**
     * Set back light
     * level :0 to 100
     */
    //% block="Set back light level %Lev"
    //% Lev.min=0 Lev.max=100
    //% weight=196
    export function LCD_SetBL(Lev: number): void {
        serial.writeString("sebl " + Lev.toString() + "\r\n");
    }

    /**
     * Temperature display
     * level :-40 to 100
     */
    //% block="Temperature display %Lev"
    //% Lev.min=-20 Lev.max=99
    //% weight=196
    export function DisplayTemp(Lev: number): void {
        serial.writeString("temp " + Lev.toString() + "\r\n");
    }

    /**
     * Compass display
     * level :0 to 360
     */
    //% block="Compass display%Lev"
    //% Lev.min=0 Lev.max=360
    //% weight=196
    export function DisplayCompass(Lev: number): void {
        serial.writeString("comp " + Lev.toString() + "\r\n");
    }
}
