<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex shrink>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 1</div>
              <v-card :color="minutos == 2?'green':''" elevation="100">
                <v-container class="justify-space-around">
                  <v-row cols="12">
                    <v-col
                      class="design"
                      align="center"
                      justify="center"
                      cols="12"
                      sm="4"
                      xs="12"
                      style="margin-top: 20px"
                    >
                      <v-col cols="12" xs="4">
                        <v-img
                          src="https://i.pinimg.com/originals/00/61/5b/00615b384f87a83e52894b1188f12860.png"
                          heigth="120"
                          width="120"
                          style="margin-left: 20px"
                        ></v-img>
                      </v-col>
                      <v-col>
                        <p style="margin-top: 10px; font-size: 20px">Massagem de 00:02:00 minutos</p>
                      </v-col>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      sm="4"
                      xs="12"
                      style="margin-top: 90px; font-size: 20px"
                      class="design"
                    >Minutos: {{ minutos }} Segundos: {{ segundos }}</v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      sm="4"
                      xs="2"
                      class="float-right"
                      style="margin-top: 70px"
                    >
                      <v-btn class="mx-2 text-center" fab dark color="light-blue" @click="start()">
                        <v-icon dark>mdi-play</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="limpar(1)"
                      >
                        <v-icon dark>replay</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" style="margin-top: 20px" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 2</div>
              <v-card :color="contExercise1 == 10?'green':''" elevation="100">
                <v-container class="justify-space-around">
                  <v-row cols="12" align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img src="/exercicios/exercicio1.png" heigth="120" width="120"></v-img>
                      <p style="margin-top: 10px; font-size: 20px">Depressão do lábio</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      xs="12"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                    >{{ contExercise1 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(2, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(2, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 3</div>
              <v-card :color="contExercise2 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img src="/exercicios/exercicio3.png" heigth="120" width="120"></v-img>
                      <p style="margin-top: 10px; font-size: 20px;">Piscar o olho</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="6"
                      xs="6"
                      sm="4"
                      class="design"
                      style="margin-top: 90px; font-size: 30px"
                    >{{ contExercise2 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(3, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(3, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 4</div>
              <v-card :color="contExercise3 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img
                        style="margin-left: 20px"
                        src="/exercicios/exercicio3.png"
                        heigth="120"
                        width="120"
                      ></v-img>
                      <p style="margin-top: 10px; font-size: 20px">Piscar o olho com pressão</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="6"
                      xs="6"
                      sm="4"
                      class="design"
                      style="margin-top: 90px; font-size: 30px"
                    >{{ contExercise3 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(4, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(4, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 5</div>
              <v-card :color="contExercise4 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img src="/exercicios/exercicio5.png" heigth="120" width="120"></v-img>
                      <p style="margin-top: 10px; font-size: 20px;">Biquinho</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      xs="5"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                    >{{ contExercise4 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(5, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(5, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 6</div>
              <v-card :color="contExercise5 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img src="/exercicios/exercicio6.png" heigth="120" width="120"></v-img>
                      <p style="margin-top: 10px; font-size: 20px;">Cheiro ruim</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      xs="5"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                    >{{ contExercise5 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(6, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(6, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 7</div>
              <v-card :color="contExercise6 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img src="/exercicios/exercicio7.png" heigth="120" width="120"></v-img>
                      <p style="margin-top: 10px; font-size: 20px">Cara de bravo</p>
                    </v-col>
                    <v-col
                      cols="12"
                      xs="5"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                      align="center"
                      justify="center"
                    >{{ contExercise6 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(7, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(7, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 8</div>
              <v-card :color="contExercise7 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img
                        style="margin-left: 20px"
                        src="/exercicios/exercicio8.png"
                        heigth="120"
                        width="120"
                      ></v-img>
                      <p style="margin-top: 10px; font-size: 20px; margin-left: 18px">Sorriso aberto</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      xs="5"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                    >{{ contExercise7 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(8, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(8, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 9</div>
              <v-card :color="contExercise8 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img src="/exercicios/exercicio9.png" heigth="120" width="120"></v-img>
                      <p style="margin-top: 10px; font-size: 20px;">Subir a sobrancelha</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      xs="5"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                    >{{ contExercise8 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(9, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(9, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 10</div>
              <v-card :color="contExercise9 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img src="/exercicios/exercicio5.png" heigth="120" width="120"></v-img>
                      <p style="margin-top: 10px; font-size: 20px">Barulho de trator</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      xs="5"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                    >{{ contExercise9 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(10, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(10, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 11</div>
              <v-card :color="contExercise10 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class>
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img src="/exercicios/exercicio5.png" heigth="120" width="120"></v-img>
                      <p style="margin-top: 10px; font-size: 20px;">Mandar beijo</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      xs="5"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                    >{{ contExercise10 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(11, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(11, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 12</div>
              <v-card :color="contExercise11 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class>
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img
                        src="https://i.pinimg.com/originals/00/61/5b/00615b384f87a83e52894b1188f12860.png"
                        heigth="120"
                        width="120"
                      ></v-img>
                      <p style="margin-top: 10px; font-size: 20px;">Boquinha de peixe</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      xs="5"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                    >{{ contExercise11 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(12, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(12, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 13</div>
              <v-card :color="contExercise12 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img src="/exercicios/exercicio13.png" heigth="120" width="120"></v-img>
                      <p style="margin-top: 10px; font-size: 20px;">Bochecha de ar</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      xs="5"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                    >{{ contExercise12 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(13, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(13, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 14</div>
              <v-card :color="contExercise13 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img
                        src="https://i.pinimg.com/originals/00/61/5b/00615b384f87a83e52894b1188f12860.png"
                        heigth="120"
                        width="120"
                      ></v-img>
                      <p style="margin-top: 10px; font-size: 20px;">Chupando canudo</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      xs="5"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                    >{{ contExercise13 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(14, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(14, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 15</div>
              <v-card :color="contExercise14 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img
                        src="https://i.pinimg.com/originals/00/61/5b/00615b384f87a83e52894b1188f12860.png"
                        heigth="120"
                        width="120"
                      ></v-img>
                      <p style="margin-top: 10px; font-size: 20px;">Enchendo bexiga</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      xs="5"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                    >{{ contExercise14 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(15, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(15, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-card class="mx-auto" max-width="800" outlined style="margin-top: 20px">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">EXERCICíO 16</div>
              <v-card :color="contExercise15 == 10?'green':''">
                <v-container class="justify-space-around">
                  <v-row cols="12" class align="center" justify="center">
                    <v-col cols="12" xs="7" sm="4" class="design" align="center" justify="center">
                      <v-img
                        src="https://i.pinimg.com/originals/00/61/5b/00615b384f87a83e52894b1188f12860.png"
                        heigth="120"
                        width="120"
                      ></v-img>
                      <p style="margin-top: 10px; font-size: 20px;">Falar vogais</p>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      cols="12"
                      xs="5"
                      sm="4"
                      style="margin-top: 90px; font-size: 30px"
                      class="design"
                    >{{ contExercise15 }}/10 vezes</v-col>
                    <v-col
                      cols="12"
                      sm="4"
                      style="margin-top: 70px"
                      align="center"
                      justify="center"
                    >
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(16, 'increment')"
                      >
                        <v-icon dark>mdi-plus</v-icon>
                      </v-btn>
                      <v-btn
                        class="mx-2 text-center"
                        fab
                        dark
                        color="light-blue"
                        @click="startCont(16, 'decrement')"
                      >
                        <v-icon dark>mdi-minus</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-list-item-content>
          </v-list-item>
        </v-card>
        <v-btn depressed large color="light-blue" style="color: white" @click="finalizar">Finalizar</v-btn>
        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
      </v-flex>
    </v-layout>
    <v-footer app>
      <span class="design">Desenvolvido por Rhalf Oliveira&copy; 2020</span>
    </v-footer>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Exercícios Pendentes</v-card-title>
        <v-card-text>Favor analisar os exercícios que faltam, para assim marcar seu ponto.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="light-blue" text @click="dialog = false">Confirmar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--Informativo ao usuário-->
    <v-app id="inspire">
      <div class="text-center ma-2">
        <v-snackbar v-model="snackbar" right top v-bind:color="snacColor">
          {{ text }}
          <v-btn color="white" text @click="snackbar = false">Fechar</v-btn>
        </v-snackbar>
      </div>
    </v-app>
  </v-container>
</template>

<script>

import ControllerRanking from './ranking/controller/ControllerRanking'

const controllerRanking = new ControllerRanking()

export default {
  name: "exercicios",
  data() {
    return {
      minutos: 0,
      segundos: 0,
      tempo: "",
      dialog: false,
      contExercise1: 0,
      contExercise2: 0,
      contExercise3: 0,
      contExercise4: 0,
      contExercise5: 0,
      contExercise6: 0,
      contExercise7: 0,
      contExercise8: 0,
      contExercise9: 0,
      contExercise10: 0,
      contExercise11: 0,
      contExercise12: 0,
      contExercise13: 0,
      contExercise14: 0,
      contExercise15: 0,
      snackbar: false,
      text: "",
      snacColor: "",
      overlay: false,
    };
  },
  methods: {
    openSnackbar(bool, cor, text) {
      this.snackbar = bool;
      this.text = text;
      this.snacColor = cor;
    },
    start() {
      const vm = this;
      vm.tempo = setInterval(function() {
        if (vm.segundos == 60) {
          vm.minutos++;
          vm.segundos = 0;
        }
        if (vm.minutos == 2 && vm.minutos == 0) return 0;
        if (vm.minutos < 2) vm.segundos++;
      }, 1000);

      window.onload = vm.tempo;
    },
    startCont(exercise, method) {
      if (exercise == 2 && method == "increment") {
        if (this.contExercise1 < 10) this.contExercise1++;
      } else if (exercise == 2 && method == "decrement") {
        if (this.contExercise1 > 0) this.contExercise1--;
      }
      if (exercise == 3 && method == "increment") {
        if (this.contExercise2 < 10) this.contExercise2++;
      } else if (exercise == 3 && method == "decrement") {
        if (this.contExercise2 > 0) this.contExercise2--;
      }
      if (exercise == 4 && method == "increment") {
        if (this.contExercise3 < 10) this.contExercise3++;
      } else if (exercise == 4 && method == "decrement") {
        if (this.contExercise3 > 0) this.contExercise3--;
      }
      if (exercise == 5 && method == "increment") {
        if (this.contExercise4 < 10) this.contExercise4++;
      } else if (exercise == 5 && method == "decrement") {
        if (this.contExercise4 > 0) this.contExercise4--;
      }
      if (exercise == 6 && method == "increment") {
        if (this.contExercise5 < 10) this.contExercise5++;
      } else if (exercise == 6 && method == "decrement") {
        if (this.contExercise5 > 0) this.contExercise5--;
      }
      if (exercise == 7 && method == "increment") {
        if (this.contExercise6 < 10) this.contExercise6++;
      } else if (exercise == 7 && method == "decrement") {
        if (this.contExercise6 > 0) this.contExercise6--;
      }
      if (exercise == 8 && method == "increment") {
        if (this.contExercise7 < 10) this.contExercise7++;
      } else if (exercise == 8 && method == "decrement") {
        if (this.contExercise7 > 0) this.contExercise7--;
      }
      if (exercise == 9 && method == "increment") {
        if (this.contExercise8 < 10) this.contExercise8++;
      } else if (exercise == 9 && method == "decrement") {
        if (this.contExercise8 > 0) this.contExercise8--;
      }
      if (exercise == 10 && method == "increment") {
        if (this.contExercise9 < 10) this.contExercise9++;
      } else if (exercise == 10 && method == "decrement") {
        if (this.contExercise9 > 0) this.contExercise9--;
      }
      if (exercise == 11 && method == "increment") {
        if (this.contExercise10 < 10) this.contExercise10++;
      } else if (exercise == 11 && method == "decrement") {
        if (this.contExercise10 > 0) this.contExercise10--;
      }
      if (exercise == 12 && method == "increment") {
        if (this.contExercise11 < 10) this.contExercise11++;
      } else if (exercise == 12 && method == "decrement") {
        if (this.contExercise11 > 0) this.contExercise11--;
      }
      if (exercise == 13 && method == "increment") {
        if (this.contExercise12 < 10) this.contExercise12++;
      } else if (exercise == 13 && method == "decrement") {
        if (this.contExercise12 > 0) this.contExercise12--;
      }
      if (exercise == 14 && method == "increment") {
        if (this.contExercise13 < 10) this.contExercise13++;
      } else if (exercise == 14 && method == "decrement") {
        if (this.contExercise13 > 0) this.contExercise13--;
      }
      if (exercise == 15 && method == "increment") {
        if (this.contExercise14 < 10) this.contExercise14++;
      } else if (exercise == 15 && method == "decrement") {
        if (this.contExercise14 > 0) this.contExercise14--;
      }
      if (exercise == 16 && method == "increment") {
        if (this.contExercise15 < 10) this.contExercise15++;
      } else if (exercise == 16 && method == "decrement") {
        if (this.contExercise15 > 0) this.contExercise15--;
      }
    },

    finalizar () {
      this.overlay = true
      const vm = this
      if(this.minutos < 2)
        this.dialog = true
      else if(this.contExercise1 < 10)
        this.dialog = true
      else if(this.contExercise2 < 10)
        this.dialog = true
      else if(this.contExercise3 < 10)
        this.dialog = true
      else if(this.contExercise4 < 10)
        this.dialog = true
      else if(this.contExercise5 < 10)
        this.dialog = true
      else if(this.contExercise6 < 10)
        this.dialog = true
      else if(this.contExercise7 < 10)
        this.dialog = true
      else if(this.contExercise8 < 10)
        this.dialog = true
      else if(this.contExercise9 < 10)
        this.dialog = true
      else if(this.contExercise10 < 10)
        this.dialog = true
      else if(this.contExercis11 < 10)
        this.dialog = true
      else if(this.contExercise12 < 10)
        this.dialog = true
      else if(this.contExercise13 < 10)
        this.dialog = true
      else if(this.contExercis14 < 10)
        this.dialog = true
      else if(this.contExercise15 < 10)
        this.dialog = true
      else{
        controllerRanking.atualizarPontuacao(localStorage.getItem("email"))
        .then((result) => {
          console.log("result: " + result)
            if(result){
              vm.openSnackbar(true, "green", "Ponto registrado com sucesso.");
              vm.limparFinalização()
            }
            else
              vm.openSnackbar(true, "green", "Não foi possível registrar o ponto, tente novamente.");
            vm.overlay = false
        })
        .catch(error => console.log(error))
       }
      this.overlay = false
    },

    limpar (exercicio) {
      if (exercicio == "1") {
        window.clearInterval(this.tempo);
        this.segundos = 0;
        this.minutos = 0;
      }
    },
    limparFinalização () {
      this.segundos = 0;
      this.minutos = 0;
      this.contExercise1 = 0
      this.contExercise2 = 0
      this.contExercise3 = 0
      this.contExercise4 = 0
      this.contExercise5 = 0
      this.contExercise6 = 0
      this.contExercise7 = 0
      this.contExercise8 = 0
      this.contExercise9 = 0
      this.contExercise10 = 0
      this.contExercise11 = 0
      this.contExercise12 = 0
      this.contExercise13 = 0
      this.contExercise14 = 0
      this.contExercise15 = 0
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Quicksand:wght@300&display=swap");

.design {
  font-family: "Josefin Sans", sans-serif;
}
</style>
