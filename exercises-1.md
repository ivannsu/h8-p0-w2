# Exercises 1

## NEWTON SECOND LAW

### [Algoritma]

  1. Simpan `massa` dengan nilai 600
  2. Simpan `percepatan` dengan nilai 2m/s2
  3. Simpan `gaya` tanpa nilai, `gaya` akan kita isi nanti
  4. Hitung gaya dengan rumus sebagai berikut:
     - `massa` dikali `percepatan`
  5. Kemudian simpan hasil perkalian ke `gaya`
  6. Tampilkan nilai `gaya`

### [PseudoCode]

  1. STORE `massa` with 600
  2. STORE `percepatan` with 2m/s2
  3. STORE `gaya` without any value
  4. CALCULATE `massa` * `percepatan`
  5. SET `gaya` with calculation result
  6. DISPLAY `gaya`

## TAHUN KABISAT

### [Algoritma]

  1. Simpan `tahun` dengan nilai tahun sekarang (contoh: 2018)
  2. Simpan `sisa` tanpa nilai, `sisa` akan kita isi dengan nilai sisa hasil pembagian
  3. Simpan `sisa2` tanpa nilai
  4. Simpan `sisa3` tanpa nilai

  4. Hitung `tahun` dibagi 4, kemudian sisa pembagian nya di simpan ke `sisa`
  5. Hitung `tahun` dibagi 100, kemudian sisa pembagian nya di simpan ke `sisa2`
  6. Hitung `tahun` dibagi 400, kemudian sisa pembagian nya di simpan ke `sisa3`

  7. Jika `sisa` sama dengan 0 DAN `sisa2` selain dari 0 maka:

        TAMPILKAN 'Tahun Kabisat'

     Jika `sisa` sama dengan 0 DAN `sisa2` sama dengan 0 DAN `sisa3` sama dengan 0 maka:

        TAMPILKAN 'Tahun Kabisat'

     Selain itu:

        TAMPILKAN 'Tahun ini BUKAN Tahun Kabisat'

### [PseudoCode]

  STORE `tahun` with year value (example: 2018)
  STORE `sisa` without value.
  STORE `sisa2` without value.
  STORE `sisa3` without value.

  CALCULATE `tahun` % 4, SET `sisa` with calculate result
  CALCULATE `tahun` % 100, SET `sisa2` with calculate result
  CALCULATE `tahun` % 400, SET `sisa3` with calculate result

  IF `sisa` == 0 AND `sisa2` !== 0:

    DISPLAY 'Tahun Kabisat'

  ELSE IF `sisa` == 0 AND `sisa2` == 0 AND `sisa3` == 0:

    DISPLAY 'Tahun Kabisat'

  ELSE

    DISPLAY 'Tahun ini BUKAN Tahun Kabisat'

  END IF

## LAUNDRY DAY

### [Algoritma]

  1. Simpan `total` dengan nilai 20
  2. Simpan `pakaian` dengan nilai 0
  3. SELAMA `pakaian` KURANG DARI atau SAMA DENGAN `total`, LAKUKAN:
     - Masukan pakaian ke dalam mesin cuci
     - `pakaian` ditambah 1
  4. Tampilkan 'Total pakaian sudah 20'

### [PseudoCode]

  1. STORE `total` with any number value (example: 20)
  2. STORE `pakaian` with 0 value
  3. WHILE `pakaian` LESS THAN `total` DO
     - SET `pakaian` = `pakaian` + 1

     END WHILE

  4. DISPLAY 'Total pakaian sudah 20'

## PERIKSA KUKU

### [Algoritma]

  1. Simpan `jumlah` dengan nilai 40
  2. Simpan `siswake` dengan nilai 0
  3. SELAMA `siswake` KURANG DARI atau SAMA DENGAN `jumlah` LAKUKAN:
     - Jika Siswa ke `siswake` kuku nya panjang maka

           BERIKAN HUKUMAN
           `siswake` ditambah 1
           Kembali ke langkah No.3

     - Jika tidak maka

           `siswake` ditambah 1
           Kembali ke langkah No.3

### [PseudoCode]

  STORE `jumlah` with any number value (example: 40)

  STORE `siswake` with 0

  WHILE `siswake` LESS THAN `jumlah` DO

    IF `siswake` == KUKU NYA PANJANG

      BERIKAN HUKUMAN
      SET `siswake` = `siswake` + 1

    ELSE

      SET `siswake` = `siswake` + 1

    END IF
  ENDWHILE
